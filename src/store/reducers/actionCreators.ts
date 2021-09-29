import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/actionCreators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators
}