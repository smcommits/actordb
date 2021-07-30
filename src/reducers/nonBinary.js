const nonBinary = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NON_BINARY':
      return action.payload;
    default:
      return state
  }
};

export nonBinary;

