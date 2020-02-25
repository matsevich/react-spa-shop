const initialState = {
  isReady: false,
  items: [],
  pageSize: 8,
  totalUsersCount: 101,
  currentPage: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLE':
      return {
        ...state,
        items: action.payload,
        isReady: true,
      };
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload
      };
    default:
      return state;
  }
};