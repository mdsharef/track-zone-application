import { formatDistance, parseISO } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import DisplayClock from "../shared/display-clock";
import EventAction from "../shared/eventActions";

const ClockListItem = ({ 
  clock, 
  localClock, 
  updateClock, 
  deleteClock,
  addEvent,
  deleteEvent,
  updateEvent,
  getEventsByClockID,
  deleteEventsByClockID,
}) => {
    const { date } = useClock(clock.timezone, clock.offset);

    if(!date || !localClock) return null;

  return (
    <div>
      <DisplayClock 
          date={date} 
          title={clock.title} 
          timezone={clock.timezone} 
          offset={clock.offset} 
      />
      <h3>{formatDistance(typeof localClock === 'string' ? parseISO(localClock) : localClock, date)}</h3>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <ClockActions 
          clock={clock}
          updateClock={updateClock}
          deleteClock={deleteClock}
        />
        <EventAction 
          clockID={clock.id}
          addEvent={addEvent}
          deleteEvent={deleteEvent}
          updateEvent={updateEvent}
          getEventsByClockID={getEventsByClockID}
          deleteEventsByClockID={deleteEventsByClockID}
        />
      </div>
    </div>
  )
}

export default ClockListItem;