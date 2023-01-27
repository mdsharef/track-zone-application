import { useState } from "react";
import DialogModal from "../../ui/Dialog";

const EventListItemAction = ({
    event,
    deleteEvent,
    updateEvent
}) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleEditOpen = () => {
        setIsEdit(true)
    }

    const handleEditClose = () => {
        setIsEdit(false)
    }

    return (
        <div>
            <div>
                <button onClick={handleEditOpen}>Edit Event</button>
                <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
            </div>

            <DialogModal 
                values={event}
                handleEvent={updateEvent}
                edit={true}
                open={isEdit}
                handleClose={handleEditClose}
            />
        </div>
    )
};

export default EventListItemAction;