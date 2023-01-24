import DisplayEvent from "../shared/display-event";
import EventListItemAction from "../shared/event-list-item-action";

const EventListItem = ({ event, deleteEvent, updateEvent }) => {
    return (
        <div>
            <DisplayEvent event={event} />
            <EventListItemAction 
                event={event} 
                deleteEvent={deleteEvent} 
                updateEvent={updateEvent}
            />
        </div>
    )
};

export default EventListItem;