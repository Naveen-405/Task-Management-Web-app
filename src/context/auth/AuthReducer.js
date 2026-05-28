export const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case "AUTH_READY":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
