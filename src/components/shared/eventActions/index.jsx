import { useState } from "react";
import EventList from "../../event-list";
import EventForm from "../event-form";

const EventAction = ({
    addEvent,
    updateEvent,
    clockID,
    deleteEvent,
    getEventsByClockID,
    deleteEventsByClockID,
}) => {
    const [isCreate, setIsCreate] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const handleCreate = () => {
        setIsCreate(!isCreate);
    }

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div>
            <div>
                <button onClick={handleCreate}>Create Event</button>
                <button onClick={handleToggle}>Toggle Events</button>
            </div>
            {isCreate && (
                <>
                    <h3>Create Event</h3>
                    <EventForm
                        clockID={clockID}
                        handleEvent={addEvent}
                    />
                </>
            )}
            {isToggle && (
                <>
                    <h3>Events of this clock</h3>
                    <EventList 
                        clockID={clockID}
                        deleteEvent={deleteEvent}
                        updateEvent={updateEvent}
                        getEventsByClockID={getEventsByClockID}
                        deleteEventsByClockID={deleteEventsByClockID}
                    />
                </>
            )}
        </div>
    )
}

export default EventAction;