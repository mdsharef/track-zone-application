import useForm from "../../../hooks/useForm"
// import { eventValidationInitial } from "../../../initialStates/eventInitState"
import checkValidity from "../../../utils/checkValidity"

const EventForm = ({
    clockID,
    values={title: '', startTime: '', endTime: ''}, 
    handleEvent,
    edit=false
}) => {
    console.log(values);

    const {
       formState: events,
       handleChange,
       handleSubmit,
       handleFocus,
       handleBlur,
       clear, 
    } = useForm({init: values, validate: checkValidity, willTimezoneUpdated: false});

    // const handleUpdate = (values) => {
    //     handleEvent(values, clockID)
    // }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, handleEvent, {clockID: clockID})}>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={events.title.value} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    {events.title.error && (<p>{events.title.error}</p>)}
                </div>
                <div>
                    <label htmlFor="startTime">Start From : </label>
                    <input 
                        type="time" 
                        name="startTime"
                        id="startTime"
                        value={events.startTime.value}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {events.startTime.error && (<p>{events.startTime.error}</p>)}
                </div>
                <div>
                    <label htmlFor="endTime">End At : </label>
                    <input 
                        type="time" 
                        name="endTime"
                        id="endTime"
                        value={events.endTime.value}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {events.endTime.error && (<p>{events.endTime.error}</p>)}
                </div>
                <div>
                    <button type="reset" onClick={clear}>Clear</button>
                    <button type="submit">{edit ? 'Update' : 'Create'}</button>
                </div>
            </form>
        </div>
    )
}

export default EventForm;