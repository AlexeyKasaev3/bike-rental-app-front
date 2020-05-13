export const bicyclesReducer = (state = [], action) => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

export const bicyclesFetchStatusReducer = (state = 'waiting', action) => {
  switch (action.type) {
    case 'BICYCLES_FETCH_SUCCESS':
    case 'BICYCLES_FETCH_ERROR_RESET':
      return 'waiting';
    case 'BICYCLES_FETCH_PROCCESS':
      return 'loading';
    case 'BICYCLES_FETCH_ERROR':
      return 'error';
    default:
      return state;
  }
};
