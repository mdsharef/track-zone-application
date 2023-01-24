import { useState } from "react";
import deepClone from "../utils/deepClone";
import generateID from "../utils/generateId";

const getID = generateID('clock');

const useApp = (initValue) => {
  const [localClock, setLocalClock] = useState(deepClone(initValue));
  const [clocks, setClocks] = useState([]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    })
  }

  const createClock = (clock) => {
    clock.id = getID.next().value;
    
    setClocks((prev) => ([
      ...prev, clock
    ]))
  }

  const updateClock = (updatedClock) => {
    setClocks(clocks.map(clock => {
      if(clock.id === updatedClock.id) return updatedClock;

      return clock;
    }));
  }

  const deleteClock = (id) => {
    setClocks(clocks.filter(clock => clock.id !== id));
  }

  return {
    localClock,
    clocks,
    updateLocalClock,
    createClock,
    updateClock,
    deleteClock
  }
}

export default useApp;