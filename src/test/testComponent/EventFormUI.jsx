import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import checkValidity from "../../utils/checkValidity";

const EventForm = ({
    clockID,
    values={title: '', startTime: '', endTime: ''}, 
    handleEvent,
    edit=false
}) => {
    // console.log(values);

    const {
       formState: events,
       handleChange,
       handleSubmit,
       handleFocus,
       handleBlur,
       clear, 
    } = useForm({init: values, validate: checkValidity, willTimezoneUpdated: false});

    const handleEventSubmit = (e) => {
        if(!edit) {
            handleSubmit(e, handleEvent, {clockID: clockID});
        } else {
            handleSubmit(e, handleEvent)
        }
    }

    return (
        <div>
            <form onSubmit={handleEventSubmit}>
                
                <TextField 
                    fullWidth
                    variant="outlined"
                    label="Title" 
                    name="title"
                    value={events.title.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    error={Boolean(events.title.error)}
                    helperText={events.title.error ? events.title.error : 'Give a title of the event'}
                    sx={{ marginBottom: '12px'}}
                />
               
                <TextField 
                    fullWidth
                    type="time"
                    variant="outlined"
                    label="Start From"
                    name="startTime"
                    value={events.startTime.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    error={Boolean(events.startTime.error)}
                    helperText={events.startTime.error ? events.startTime.error : 'Give a time when the event will start'}
                    sx={{ marginBottom: '12px'}}
                />
               
                <TextField 
                    fullWidth
                    type="time"
                    variant="outlined"
                    label="End At"
                    name="endTime"
                    value={events.endTime.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    error={Boolean(events.endTime.error)}
                    helperText={events.endTime.error ? events.endTime.error : 'Give a time when the event will end'}
                    sx={{ marginBottom: '12px'}}
                />
                <div>
                    <Button variant="contained" color="warning" type="reset" onClick={clear} sx={{marginRight: '10px'}}>Clear</Button>
                    <Button variant="contained" type="submit">{edit ? 'Update' : 'Create'}</Button>
                </div>
            </form>
        </div>
    )
}

export default EventForm;