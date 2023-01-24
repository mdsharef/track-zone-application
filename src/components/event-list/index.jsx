import { useEffect, useState } from "react";
import EventListItem from "./EventListItem";

const EventList = ({
    clockID,
    getEventsByClockID,
    deleteEvent,
    updateEvent,
    deleteEventsByClockID,
}) => {

    const [eventState, setEventState] = useState(null);

    // console.log(eventsState);

    useEffect(() => {
        setEventState(getEventsByClockID(clockID, true));
    }, []);

    if(!eventState) return null;

    return (
        <div>
            {eventState.length === 0 ? (
                <p>There is no evnet.</p>
            ) : (
                <>
                    <div>
                        {eventState.map(event => (
                            <EventListItem 
                                key={event.id} 
                                event={event} 
                                deleteEvent={deleteEvent} 
                                updateEvent={updateEvent} 
                            />
                        ))}
                    </div>
                    <div>
                        <button onClick={deleteEventsByClockID(clockID)}>Delete All Events</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default EventList;