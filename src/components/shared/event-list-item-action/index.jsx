import { useState } from "react";
import EventForm from "../event-form";

const EventListItemAction = ({
    event,
    deleteEvent,
    updateEvent
}) => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <div>
            <div>
                <button onClick={() => setIsEdit(!isEdit)}>Edit Event</button>
                <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
            </div>
            {isEdit && (
                <EventForm
                    clockID={event.id}
                    values={event}
                    handleEvent={updateEvent}
                    edit={true}
                />
            )}
        </div>
    )
};

export default EventListItemAction;