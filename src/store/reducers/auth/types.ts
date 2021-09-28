import { iUser } from "../../../models/iUser";

export interface iAuthState {
  isAuth: boolean;
  user: iUser;
  isLoading: boolean;
  isError: null | string;
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface iSetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}
export interface iSetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}
export interface iSetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: iUser
}
export interface iSetLoadAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean
}

export type AuthAction = 
  iSetAuthAction |
  iSetErrorAction |
  iSetUserAction |
  iSetLoadAction