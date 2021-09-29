import { Calendar } from "antd";
import React from "react";
import { iEvent } from "../models/iEvent";

interface EventCalendarProps {
  events: iEvent[];
}

export const EventCalendar: React.FC<EventCalendarProps> = () => {
  return (
    <Calendar/>
  )
}