import React from 'react';

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

export default Filter;
