import axios from "axios";
import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { iEvent } from "../../../models/iEvent";
import { iUser } from "../../../models/iUser";
import { EventActionEnum, SetEventAction, SetGuestAction } from "./types";

export const EventActionCreators = {
  setGuests: (guests: iUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload: guests}),
  setEvents: (events: iEvent[]): SetEventAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),
  fetchGuests: () => async(dispatch: AppDispatch) => {
   try {
     const response = await UserService.getUsers()
     dispatch(EventActionCreators.setGuests(response.data))
   } catch (error) {
     console.log(error)
   }
  },
  createEvent: (event: iEvent) => async(dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as iEvent[]
      json.push(event)
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (error) {
      console.log(error)
    }
  },
  fetchEvents: (userName: string) => async(dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as iEvent[]
      const currentUserEvents = json.filter(ev => ev.autor === userName || ev.guest === userName)
      dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (e) {
      console.log(e)
    }
  }

  
}