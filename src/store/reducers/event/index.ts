import { iEvent } from "../../../models/iEvent";
import { iUser } from "../../../models/iUser";
import { EventAction, EventActionEnum, EventState } from "./types";

const initialState: EventState = {
  guests: [] as iUser[],
  events: [] as iEvent[],
}

export default function EventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:      
      return {
        ...state,
        guests: action.payload
      };
    case EventActionEnum.SET_EVENTS:      
      return {
        ...state,
        events: action.payload
      };
  
    default:
      return state;
  }
}