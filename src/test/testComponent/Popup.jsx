import { Box, Button, Modal, Typography } from "@mui/material";
// import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import EventForm from "./EventFormUI";
import ClockForm from "./FormUI";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '30px 100px'
};

const Popup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" mb={5}>Create Clock</Typography>
          {/* <ClockForm /> */}
          <EventForm />
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;