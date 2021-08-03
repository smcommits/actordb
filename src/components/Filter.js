import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { filterHandler } = props;

  const handleFilterChange = (event) => {
    filterHandler(event.target.value);
  };

  const filterCategories = ['All', 'Trending', 'Male', 'Female', 'Non-Binary'];

  return (
    <select id="filterCategories" name="filterCategories" onChange={handleFilterChange}>
      {filterCategories.map((filterCategory) => (
        <option
          key={filterCategory}
          value={filterCategory}
        >
          {filterCategory}
        </option>
      ))}
    </select>
  );
};

Filter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default Filter;
