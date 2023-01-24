import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import DisplayClock from "../shared/display-clock";

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
    <div>
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
    </div>
  )
}

export default LocalClock;