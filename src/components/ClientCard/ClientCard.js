import React, { useState } from 'react';
import { CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ExerciseCardModal from '../ExerciseCardModal/ExerciseCardModal';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
} from '../../services/apiCalls';
import { useClientContext } from '../../Context/ClientContext';

export default function ClientCard({ id, firstName, lastName, email }) {
  const [openModal, setOpenModal] = useState(false);
  const [, toggleClient, , setError, , setSuccess] = useClientContext();
  const toggleOpen = () => setOpenModal(!openModal);

  const handleDeleteClick = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.PATCH,
      ENDPOINTS.CLIENT,
      CREDENTIALS.INCLUDE,
      email,
      null,
      null,
      true,
    );
    console.log(res);

    if (res.status === 200) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      toggleClient();
    } else {
      setError(true);
      setSuccess(false);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const handleAddWorkoutClick = () => {
    console.log('add workout');
  };

  return (
    <Card
      key={id}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: '1 1 100rem',
        margin: '1rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
      }}
    >
      <CardHeader sx={{ flex: 1 }} title={`${firstName} ${lastName}`} />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="caption" color="text.secondary">
          {email}
        </Typography>
      </CardContent>

      <IconButton onClick={handleAddWorkoutClick} size="large" color="primary">
        <FitnessCenterIcon />
      </IconButton>
      <IconButton onClick={handleDeleteClick} size="large" color="primary">
        <DeleteIcon />
      </IconButton>

      <ExerciseCardModal open={openModal} toggleOpen={toggleOpen} />
    </Card>
  );
}
