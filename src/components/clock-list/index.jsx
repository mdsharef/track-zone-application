import styled from "styled-components";
import ClockListItem from "../clock-list-item";

const Title = styled.h3`
  text-align: center;
  font-weight: ${props => props.secondTitle ? 400 : 500};
  font-size: ${props => props.secondTitle ? '1.7em' : '2em'};
  margin-bottom: ${props => props.secondTitle ? '0px' : '7px'};
`;

const Container = styled.div`
  margin-bottom: 20px;
  padding: ${props => props.childCom && '5px'};
  display: ${props => props.childCom && 'flex'};
  justify-content: ${props => props.childCom && 'center'};
  align-items: ${props => props.childCom && 'center'};
  flex-wrap: ${props => props.childCom && 'wrap'};
  gap: ${props => props.childCom && '1em'};
`

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
    <Container>
      <Title>Other Clocks</Title>
      <hr style={{marginBottom: '20px'}} />
      <Container childCom={true}>
        {clocks.length === 0 ? (
          <Title secondTitle={true}>There is no other clock</Title>
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
      </Container>
    </Container>
  )
}

export default ClockList;