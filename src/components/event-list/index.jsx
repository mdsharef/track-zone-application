import { useEffect, useState } from "react";
// import DisplayEvent from "../shared/display-event";
// import EventForm from "../shared/event-form";
// import EventAction from "../shared/eventActions";
import EventListItem from "./EventListItem";

const EventList = ({
    clockID,
    deleteEvent,
    updateEvent,
    getEventsByClockID,
    deleteEventsByClockID,
}) => {

    // const [isEdit, setIsEdit] = useState(false);
    const [clockEvents, setClockEvents] = useState(null);

    // console.log(clockEvents);

    useEffect(() => {
        setClockEvents([...getEventsByClockID(clockID, true)])
    }, []);

    if(!clockEvents) return null;

    return (
        <div>
            {clockEvents ? (
                <>
                    <div>
                        {clockEvents.map(event => (
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
            ) : (
                <p>There is no evnet.</p>
            )}
        </div>
    )
}

export default EventList;