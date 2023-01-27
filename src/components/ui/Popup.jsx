import { Box, Modal, Typography } from "@mui/material";
import ClockForm from "../shared/clock-form";

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

const Popup = ({ values, handleClock, title, edit, open, handleClose }) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" mb={5}>{edit ? 'Edit Clock' : 'Create Clock'}</Typography>
          <ClockForm 
            values={values} 
            handleClock={handleClock}
            title={title}
            edit={edit}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;