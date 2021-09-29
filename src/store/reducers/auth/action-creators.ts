import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { iUser } from "../../../models/iUser";
import {AuthActionEnum, iSetAuthAction, iSetErrorAction, iSetLoadAction, iSetUserAction } from "./types";

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): iSetAuthAction =>({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),
  setUser: (user: iUser ): iSetUserAction =>({
    type: AuthActionEnum.SET_USER,
    payload: user
  }),
  setEror: (error: string ): iSetErrorAction =>({
    type: AuthActionEnum.SET_ERROR,
    payload: error
  }),
  setLoad: (load: boolean): iSetLoadAction =>({
    type: AuthActionEnum.SET_IS_LOADING,
    payload: load 
  }),
  login: (username: string, pasword: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setLoad(true))
      setTimeout(async()=>{
        const response = await UserService.getUsers()
        const mockUser = response.data.find(user => user.username === username && user.password === pasword)
        if(mockUser){
          localStorage.setItem('auth', 'true')
          localStorage.setItem('username', mockUser.username)
          dispatch(AuthActionCreators.setUser(mockUser))
          dispatch(AuthActionCreators.setIsAuth(true))
        } else {
          dispatch(AuthActionCreators.setEror('Некорректный логин или пароль'))
        }
      }, 1000)
      
      dispatch(AuthActionCreators.setLoad(false))
    } catch (error) {
      dispatch(AuthActionCreators.setEror('Ошибка аутентификации'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {    
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(AuthActionCreators.setUser({} as iUser))
    dispatch(AuthActionCreators.setIsAuth(false))    
  }
}