const DisplayEvent = ({ event }) => {
    return (
        <div>
            <h4>{event.title}</h4>
            <p>Starting Time : - {event.startTime}</p>
            <p>Ending Time : - {event.endTime}</p>
        </div>
    )
};

export default DisplayEvent;