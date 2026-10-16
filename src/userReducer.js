import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./actions";

const initialState = { users: [], currentUser: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };
    case LOGIN_USER:
      return { ...state, currentUser: action.payload };
    case LOGOUT_USER:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
