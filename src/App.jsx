import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import useApp from "./hooks/useApp";
import { localClockInitState } from "./initialStates/clockInitState";

const App = () => {

  const {
    localClock,
    clocks,
    updateLocalClock,
    createClock,
    updateClock,
    deleteClock
  } = useApp(localClockInitState);

  return (
    <div>
      <LocalClock 
        clock={localClock} 
        updateClock={updateLocalClock} 
        createClock={createClock} 
      />
      <ClockList 
        clocks={clocks}
        localClock={localClock.date}
        updateClock={updateClock} 
        deleteClock={deleteClock} 
      />
    </div>
  )
}

export default App;