import { useState } from "react";
import deepClone from "../utils/deepClone";
import generateID from "../utils/generateId";

const getID = generateID('event')

const useEvents = () => {
    const [state, setState] = useState({});

    const getEventsByClockID = (clockID, isArr=false) => {
        if(isArr) {
            return Object.keys(state).reduce((acc, cur) => {
                if(cur.startsWith(clockID)) {
                    acc.push(state[cur]);
                }
                return acc;
            }, []);
        } else {
            return Object.keys(state).reduce((acc, cur) => {
                if(cur.startsWith(clockID)) {
                    acc[cur] = state[cur];
                }
                return acc;
            }, {}); 
        }
    }

    const getEvents = (isArray=false) => {
        if(!isArray) return state;

        return Object.values(state);
    };

    const addEvent = (event) => {
        event.id = getID.next().value;
        setState((prev) => ({
            ...prev,
            [`${event.clockID}|${event.id}`]: event,
        }));
    }

    const deleteEvent = (id) => {
        const oldState = deepClone(state);
        delete oldState[id];
        setState(oldState);
    }

    const deleteEventsByClockID = (clockID) => {
        setState(Object.keys(state).filter(key => !key.startsWith(clockID)));
    }

    const updateEvent = (updatedEvent, id) => {
        const oldState = deepClone(state);
        oldState[id] = {
            ...oldState[id],
            ...updatedEvent,
        }

        setState(oldState);
    }

    return {
        events: state,
        getEventsByClockID,
        getEvents,
        addEvent,
        deleteEvent,
        deleteEventsByClockID,
        updateEvent,
    }
}

export default useEvents;