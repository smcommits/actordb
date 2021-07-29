const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'FILTER_ACTORS':
      return (action.payload === 'Female' && 1)
      || (action.payload === 'Male' && 2)
      || (action.payload === 'Non-Binary' && 3)
      || action.payload;
    default:
      return state;
  }
};

export default filterReducer;
