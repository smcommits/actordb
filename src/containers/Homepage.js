import {
  React, useState, useRef, useCallback,
} from 'react';
import { connect } from 'react-redux';

import { fetchActorsStore } from '../reducers/actors';
import Actor from '../components/Actor';

const HomePage = (props) => {
  const { actors, getActors } = props;
  const [page, setPage] = useState(2);

  const observer = useRef();

  const lastActorElement = useCallback((element) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
        getActors(page);
      }
    });

    if (element) observer.current.observe(element);
  }, [actors]);

  const actorsList = actors.map((actor, index) => ((index + 1 === actors.length)
    ? <Actor reference={lastActorElement} actor={actor} key={actor.id} />
    : <Actor actor={actor} key={actor.id} />));

  return (
    <section className="all-actors">
      {actorsList}
    </section>
  );
};

const mapStateToProps = (state) => ({
  actors: state.actors,
});

const mapDispatchToProps = (dispatch) => ({
  getActors: (page) => {
    dispatch(fetchActorsStore(page));
  },
});

const HomePageConnected = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageConnected;
