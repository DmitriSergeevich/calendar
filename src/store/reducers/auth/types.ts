export interface iAuthState {
  isAuth: boolean
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
}

interface iSetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean
}

export type AuthAction = iSetAuthAction