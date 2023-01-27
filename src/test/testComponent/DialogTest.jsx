import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import EventForm from "./EventFormUI";
// import ClockForm from "./FormUI";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   padding: '30px 100px'
// };

const DialogModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Dialog
        maxWidth="md"
        open={open}
        // onClose={handleClose}
      >
        <DialogTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="h5">Create Event</Typography>
                <Button onClick={handleClose} variant="outlined" color="error">X</Button>
            </div>
        </DialogTitle>
        <DialogContent dividers>
            <EventForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DialogModal;