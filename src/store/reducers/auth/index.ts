import { iUser } from "../../../models/iUser";
import { AuthAction, iAuthState, AuthActionEnum } from "./types";

const defaultState: iAuthState = {
  isAuth: false,
  user: {} as iUser,
  isLoading: false,
  isError: null,
};

export default function authReducer(
  state = defaultState,
  action: AuthAction
): iAuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
        isLoading: false,
      };
    case AuthActionEnum.SET_ERROR:
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    case AuthActionEnum.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionEnum.SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
