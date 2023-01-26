import { useEffect } from "react";
import styled from "styled-components";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import DisplayClock from "../shared/display-clock";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 55px;
  gap: 2em;
`;

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset
    })
  }, [date])

  return (
    <Container>
      {date && (
        <DisplayClock 
          date={date} 
          timezone={clock.timezone} 
          offset={clock.offset} 
          title={clock.title} 
        />
      )}
      <ClockActions 
        local={true} 
        clock={clock} 
        updateClock={updateClock} 
        createClock={createClock}
      />
    </Container>
  )
}

export default LocalClock;