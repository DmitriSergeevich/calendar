import { Calendar } from "antd";
import { Moment } from "moment";
import React from "react";
import { iEvent } from "../models/iEvent";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: iEvent[];
}

export const EventCalendar: React.FC<EventCalendarProps> = (props) => {

  function dateCellRender(value: Moment) {
    const formateDate = formatDate(value.toDate())
    const currentDayEvents = props.events.filter(ev => ev.date === formateDate)
    return (
      <div>
        {currentDayEvents.map((ev, idx) =>
          <div key={idx}>{ev.description}</div>)}
      </div>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender} />
  )
}