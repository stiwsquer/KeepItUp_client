import React, { useState } from 'react';

import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddClientModal from '../AddClientModal/AddClientModal';

export default function AddClient() {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <>
      <Button
        onClick={toggleOpenModal}
        sx={{ height: 50, ml: 2, mr: 1 }}
        variant="contained"
      >
        <AddIcon />
      </Button>

      <AddClientModal open={openModal} toggleOpen={toggleOpenModal} />
    </>
  );
}
