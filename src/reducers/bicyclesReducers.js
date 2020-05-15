export const bicyclesReducer = (state = [], action) => {
  switch (action.type) {
    case 'BICYCLES_FETCHED':
      return action.payload;
    case 'BICYCLE_ADDED':
      return [...state, action.payload];
    case 'RENT_BYCICLE':
      return state.map((bycicle) => {
        if (bycicle._id === action.payload.id) {
          let newBycicle = { ...bycicle };
          newBycicle.rent_start_time = action.payload.rentStartTime;
          return newBycicle;
        } else {
          return bycicle;
        }
      });
    case 'RENT_BYCICLE_CANCEL':
      return state.map((bycicle) => {
        if (bycicle._id === action.payload) {
          let newBycicle = { ...bycicle };
          delete newBycicle.rent_start_time;
          return newBycicle;
        } else {
          return bycicle;
        }
      });
    case 'DELETE_BYCICLE':
      return state.filter(({ _id }) => _id !== action.payload);
    default:
      return state;
  }
};

export const bicyclesFetchStatusReducer = (state = 'loading', action) => {
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
