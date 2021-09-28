import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";

export interface iRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const publicRoutes: iRoute[] = [
  {
    path: RouteNames.LOGIN,
    exact: true,
    component: Login
  }
]
export const privateRoutes: iRoute[] = [
  {
    path: RouteNames.EVENT,
    exact: true,
    component: Event
  }
]