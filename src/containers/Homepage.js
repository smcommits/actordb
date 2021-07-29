import {
  React, useState, useRef, useCallback, useEffect,
} from 'react';
import { connect } from 'react-redux';

import { fetchActorsStore } from '../reducers/actors';
import Actor from '../components/Actor';
import Search from '../components/Search';
import styles from '../stylesheets/Homepage.module.scss';
import Filter from '../components/Filter';
import { fetchTrendingActorsStore } from '../reducers/trending';
import Loader from '../components/Loader';

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
  } = props;

  useEffect(() => {
    if (actorFilter === 'Trending') {
      setPage(1);
    }
  }, [actorFilter]);

  const filteredActors = (actorFilter === 'All' && actors)
        || actors.filter((actor) => actor.gender === actorFilter);

  const observer = useRef();

  const lastActorElement = useCallback((element) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
        actorFilter === 'Trending' ? getTrendingActors(page) : getActors(page);
      }
    });

    if (element) observer.current.observe(element);
  }, [actors]);

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
          || generateActorList(filteredActors);
  return (
    <>
      <Search parent="Home" />
      <section className={styles.main}>
        <div className={styles.home_header}>
          <h1 className={styles.section_heading}>Trending Actors</h1>
          <Filter filterHandler={handleFilterChange} />
        </div>

        <section className={styles.all_actors}>
          {filteredList}
        </section>
      </section>
      <Loader loading={loading} />
    </>
  );
};

const mapStateToProps = (state) => ({
  actors: state.actors,
  actorFilter: state.filter,
  trending: state.trending,
  loading: state.loading.loading,
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
});

const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnected;
