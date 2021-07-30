import {
  React, useState, useRef, useCallback, useEffect,
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchActorsStore } from '../reducers/actors';
import Actor from '../components/Actor';
import Search from '../components/Search';
import styles from '../stylesheets/Homepage.module.scss';
import { fetchTrendingActorsStore } from '../reducers/trending';
import Loader from '../components/Loader';
import DropDown from '../components/Dropdown';
import nonBinaryActors from '../global/binaryGenderData';

const HomePage = (props) => {
  const [page, setPage] = useState(2);
  const {
    actors,
    getActors,
    getTrendingActors,
    actorFilter,
    trending,
    filterActors,
    loading,
    nonBinary,
    getNonBinary,
  } = props;

  useEffect(() => {
    if (actorFilter === 'Trending') {
      getTrendingActors(1);
      setPage(2);
    } else if (actorFilter === 3) {
      getNonBinary();
    }
  }, [actorFilter]);

  const checkFilterAndMakeRequest = (page) => {
    if (actorFilter === 'Trending') {
      return getTrendingActors(page);
    } if (actorFilter === 3) {
      return null;
    }
    return getActors(page);
  };

  const filteredActors = (actorFilter === 'All' && actors)
        || actors.filter((actor) => actor.gender === actorFilter);

  const observer = useRef();

  const lastActorElement = useCallback((element) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
        checkFilterAndMakeRequest(page);
      }
    });

    if (element) observer.current.observe(element);
  }, [trending, actors]);

  const handleFilterChange = (actorFilter) => {
    filterActors(actorFilter);
  };

  const generateActorList = (array) => {
    const actorsList = array.map((actor, index) => ((index + 1 === array.length)
      ? <Actor reference={lastActorElement} actor={actor} key={actor.id} />
      : <Actor actor={actor} key={actor.id} />));
    return actorsList;
  };

  const filteredList = (actorFilter === 'Trending' && generateActorList(trending))
          || (actorFilter === 3 && generateActorList(nonBinary))
          || generateActorList(filteredActors);
  return (
    <>
      <Search parent="Home" />
      <section className={styles.main}>
        <div className={styles.home_header}>
          <DropDown filterHandler={handleFilterChange} />
        </div>

        <section className={styles.all_actors}>
          {filteredList}
        </section>
      </section>
      <Loader loading={loading} />
    </>
  );
};

HomePage.propTypes = {
  actors: PropTypes.instanceOf(Array).isRequired,
  getActors: PropTypes.func.isRequired,
  getTrendingActors: PropTypes.func.isRequired,
  actorFilter: PropTypes.string.isRequired,
  trending: PropTypes.instanceOf(Array).isRequired,
  filterActors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  nonBinary: PropTypes.instanceOf(Array).isRequired,
  getNonBinary: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  actors: state.actors,
  actorFilter: state.filter,
  trending: state.trending,
  loading: state.loading.loading,
  nonBinary: state.nonBinary,
});

const mapDispatchToProps = (dispatch) => ({
  getActors: (page) => {
    dispatch(fetchActorsStore(page));
  },
  filterActors: (filter) => {
    dispatch({ type: 'FILTER_ACTORS', payload: filter });
  },
  getTrendingActors: (page) => {
    dispatch(fetchTrendingActorsStore(page));
  },
  getNonBinary: () => {
    dispatch({ type: 'FETCH_NON_BINARY', payload: nonBinaryActors });
  },
});

const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnected;
