export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const registerUser = (user) => ({ type: REGISTER_USER, payload: user });
export const loginUser = (user) => ({ type: LOGIN_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT_USER });
