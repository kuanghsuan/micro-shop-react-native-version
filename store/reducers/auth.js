import { AUTHENTICATE, LOGOUT } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  
  switch (action.type) {
    case AUTHENTICATE:
      console.log(action.token);
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGOUT:
      console.log(action.type);
      return initialState;
    default:
      return state;
  }
};
