export const addBicycleformReducer = (state = 'waiting', action) => {
  switch (action.type) {
    case 'BICYCLES_ADD_SUCCESS':
    case 'BICYCLES_ADD_ERROR_RESET':
      return 'waiting';
    case 'BICYCLE_ADD_PROCCESS':
      return 'loading';
    case 'BICYCLES_ADD_ERROR':
      return 'error';
    default:
      return state;
  }
};
