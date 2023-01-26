import { formatDistance, parseISO } from "date-fns";
import styled from "styled-components";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import DisplayClock from "../shared/display-clock";
import EventAction from "../shared/eventActions";

const Container = styled.div`
  width: ${props => props.childContainer ? '100%' : '400px'};
  display: flex;
  justify-content: ${props => props.childContainer ? 'space-between' : 'center'};
  align-items: center;
  flex-direction: ${props => props.childContainer ? 'row' : 'column'};
  gap: 1em;
  padding: 5px;
  border: ${props => props.childContainer ? 'none' : '2px solid #aaa'};
  border-radius: 8px;
`;

const ClockListItem = ({ 
  clock, 
  localClock, 
  updateClock, 
  deleteClock,
  getEventsByClockID,
  addEvent,
  deleteEvent,
  updateEvent,
  deleteEventsByClockID,
}) => {
    const { date } = useClock(clock.timezone, clock.offset);

    if(!date || !localClock) return null;

  return (
    <Container>
      <DisplayClock 
          date={date} 
          title={clock.title} 
          timezone={clock.timezone} 
          offset={clock.offset} 
      >
        {formatDistance(typeof localClock === 'string' ? parseISO(localClock) : localClock, date)}
      </DisplayClock>
      <Container childContainer={true}>
        <ClockActions 
          clock={clock}
          updateClock={updateClock}
          deleteClock={deleteClock}
        />
        <EventAction 
          clockID={clock.id}
          getEventsByClockID={getEventsByClockID}
          addEvent={addEvent}
          deleteEvent={deleteEvent}
          updateEvent={updateEvent}
          deleteEventsByClockID={deleteEventsByClockID}
        />
      </Container>
    </Container>
  )
}

export default ClockListItem;