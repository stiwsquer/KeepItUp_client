import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '0px',
  bgcolor: 'white',
  borderRadius: '10px',
  px: 10,
  py: 7,
};

export default function ConfirmModal({ open, toggleOpen, setDelete, message }) {
  return (
    <div>
      <Modal open={open} onClose={toggleOpen}>
        <Box sx={style}>
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Typography variant="h2" color="textPrimary">
              {message}
            </Typography>
          </Box>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              my: 2,
            }}
            onClick={() => {
              setDelete(true);
              toggleOpen();
            }}
          >
            Yes
          </Button>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              my: 2,
            }}
            onClick={() => {
              setDelete(false);
              toggleOpen();
            }}
          >
            No
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
