import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddClientForm from '../AddClientForm/AddClientForm';

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

export default function AddClientModal({ open, toggleOpen }) {
  return (
    <div>
      <Modal open={open} onClose={toggleOpen}>
        <Box sx={style}>
          <AddClientForm />
        </Box>
      </Modal>
    </div>
  );
}
