import { useState } from "react";
import deepClone from "../utils/deepClone";
import generateID from "../utils/generateId";
import useEvents from "./useEvents";

const getID = generateID('clock');

const useApp = (initValue) => {
  const [localClock, setLocalClock] = useState(deepClone(initValue));
  const [clocks, setClocks] = useState([]);

  const [eventState, setEventState] = useState(null)

  const {
    // events,
    // getEvents,
    getEventsByClockID,
    addEvent,
    deleteEvent,
    deleteEventsByClockID,
    updateEvent,
  } = useEvents();

  const handleEventState = (clockID) => {
    setEventState(getEventsByClockID(clockID, true));
  }


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
    deleteClock,
    eventState,
    handleEventState,
    getEventsByClockID,
    addEvent,
    deleteEvent,
    updateEvent,
    deleteEventsByClockID,
  }
}

export default useApp;