import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchActorDetailsRedux } from '../reducers/actorDetails';

const SearchItem = (props) => {
  const { option } = props;



  const fetchActor = () => {
    fetch(`https://api.themoviedb.org/3/person/${option.id}?api_key=fca3a09ec5fa268a31aa58f3449d68be&language=en-US`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <li>
      <Link to={`/actor/${option.id}`}>
        <div className="search-item">
          {option.name}
          <figure>
            <img src={`https://image.tmdb.org/t/p/w200/${option.profile_path}`} alt="" />
          </figure>
        </div>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getActor: (id) => {
    dispatch(fetchActorDetailsRedux(id));
  },
});

const ActorCardConnected = connect(mapStateToProps, mapDispatchToProps)(ActorCard);

export default ActorCardConnected;

export default SearchItem;
