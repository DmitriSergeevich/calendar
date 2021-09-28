import { AuthAction, iAuthState, AuthActionEnum } from "./types"

const defaultState: iAuthState = {
  isAuth: true
}

export default function authReducer(state = defaultState, action: AuthAction): iAuthState {
  switch(action.type) {
    case AuthActionEnum.SET_AUTH: 
      return {
        ...state,
        isAuth: action.payload
      }

    default:
      return state
  }
}