import useEvents from "../../hooks/useEvents";
import ClockListItem from "../clock-list-item";

const ClockList = ({ clocks, localClock, updateClock, deleteClock }) => {
  
  const {
    // events,
    // getEvents,
    getEventsByClockID,
    addEvent,
    deleteEvent,
    deleteEventsByClockID,
    updateEvent,
  } = useEvents()

  return (
    <div>
      <h3>Other Clocks</h3>
      <hr />
      <div>
        {clocks.length === 0 ? (
          <h3>There is no other clock</h3>
        ) : (
          clocks.map(clock => (
            <ClockListItem 
              key={clock.id} 
              clock={clock} 
              localClock={localClock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              addEvent={addEvent}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
              getEventsByClockID={getEventsByClockID}
              deleteEventsByClockID={deleteEventsByClockID}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ClockList;