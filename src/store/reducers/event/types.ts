import { iEvent } from "../../../models/iEvent";
import { iUser } from "../../../models/iUser";

export interface EventState {
  guest: iUser[];
  events: iEvent[];
}

export enum EventActionEnum {
  SET_GUESTS  = 'SET_GUESTS',
  SET_EVENTS  = 'SET_EVENTS',
}

export interface SetGuestAction {
  type: EventActionEnum.SET_GUESTS
  payload: iUser[]
}
export interface SetEventAction {
  type: EventActionEnum.SET_EVENTS
  payload: iEvent[]
}

export type EventAction = 
  SetGuestAction |
  SetEventAction