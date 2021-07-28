import React from 'react';

const Loader = (props) => {
  const { loading } = props;

  if (!loading) return null;

  return (
    <h1>Loading...</h1>
  );
};

export default Loader;
