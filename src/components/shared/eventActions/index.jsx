import { useState } from "react";
import styled from "styled-components";
import EventList from "../../event-list";
import DialogModal from "../../ui/Dialog";

const Button = styled.button`
    padding: 4px 10px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #aaa;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.1em;
`

const EventAction = ({
    getEventsByClockID,
    addEvent,
    updateEvent,
    clockID,
    deleteEvent,
    deleteEventsByClockID,
}) => {
    const [isCreate, setIsCreate] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const handleCreateOpen = () => {
        setIsCreate(true);
    }

    const handleCreateClose = () => {
        setIsCreate(false);
    }
    
    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div>
            <Container>
                <Button onClick={handleCreateOpen}>Create Event</Button>
                <Button onClick={handleToggle}>Toggle Events</Button>
            </Container>
        
            <DialogModal 
                clockID={clockID}
                handleEvent={addEvent}
                open={isCreate}
                handleClose={handleCreateClose}
            />

            {isToggle && (
                <>
                    <h3>Events of this clock</h3>
                    <EventList 
                        clockID={clockID}
                        getEventsByClockID={getEventsByClockID}
                        deleteEvent={deleteEvent}
                        updateEvent={updateEvent}
                        deleteEventsByClockID={deleteEventsByClockID}
                    />
                </>
            )}
        </div>
    )
}

export default EventAction;