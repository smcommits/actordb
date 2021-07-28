import React from 'react';
import { useParams } from 'react-router-dom';
import ActorCard from '../containers/ActorCard';

const ActorPage = () => {
  const { id } = useParams();

  return (
    <>
      <ActorCard id={id} />
    </>
  );
};

export default ActorPage;
