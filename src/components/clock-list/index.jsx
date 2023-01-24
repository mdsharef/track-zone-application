import ClockListItem from "../clock-list-item";

const ClockList = ({
  clocks, 
  localClock, 
  updateClock, 
  deleteClock,
  getEventsByClockID,
  addEvent,
  deleteEvent,
  updateEvent,
  deleteEventsByClockID, 
}) => {

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
              getEventsByClockID={getEventsByClockID}
              addEvent={addEvent}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
              deleteEventsByClockID={deleteEventsByClockID}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ClockList;