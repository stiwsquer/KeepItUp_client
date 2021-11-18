import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddClientForm from '../AddClientForm/AddClientForm';
import AddExerciseForm from '../AddExerciseForm/AddExerciseForm';
import DATA_TYPES from '../DataTypes';

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

export default function AddClientModal({ dashboardType, open, toggleOpen }) {
  return (
    <div>
      <Modal open={open} onClose={toggleOpen}>
        <Box sx={style}>
          {dashboardType === DATA_TYPES.CLIENT && <AddClientForm />}
          {dashboardType === DATA_TYPES.EXERCISE && <AddExerciseForm />}
        </Box>
      </Modal>
    </div>
  );
}
