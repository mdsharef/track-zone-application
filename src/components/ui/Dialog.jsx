import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import EventForm from "../shared/event-form";

const DialogModal = ({ clockID, values, handleEvent, edit, open, handleClose }) => {
  
  return (
    <div>
      <Dialog
        maxWidth="md"
        open={open}
      >
        <DialogTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="h5">{edit ? 'Edit Event' : 'Create Event'}</Typography>
                <Button onClick={handleClose} variant="outlined" color="error">X</Button>
            </div>
        </DialogTitle>
        <DialogContent dividers>
            <EventForm
              clockID={clockID}
              values={values}
              handleEvent={handleEvent}
              edit={edit}
            />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogModal;