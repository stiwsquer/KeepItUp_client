import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import { Hidden, IconButton, Box } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import ExerciseCardContent from '../ExerciseCardContent/ExerciseCardContent';
import ExerciseCardMedia from '../ExerciseCardMedia/ExerciseCardMedia';
import ExerciseCardModal from '../ExerciseCardModal/ExerciseCardModal';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';
import { useUserContext } from '../../Context/UserContext';
import {
  CREDENTIALS,
  ENDPOINTS,
  fetchData,
  HTTP_METHODS,
  ROLES,
} from '../../services/apiCalls';
import { useAlertContext } from '../../Context/AlertContext';
import { useFetchTogglerContext } from '../../Context/FetchTogglerContext';

export default function ExerciseCard({
  id,
  title,
  url,
  videoUrl,
  bodyPart,
  equipment,
  target,
  boxShadowColor,
  coachId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpen = () => setOpenModal(!openModal);
  const [bigCard, , , setExercise] = useExerciseCardContext();
  const [user] = useUserContext();
  const [, handleAlertData] = useAlertContext();
  const [, toggleFetch] = useFetchTogglerContext();

  const handleClick = () => {
    if (bigCard) {
      toggleOpen();
    } else if (boxShadowColor) {
      setExercise({ id, delete: true });
    } else {
      setExercise({ id, name: title, url, bodyPart, equipment, target });
    }
  };

  const bigCardContent = (
    <Box onClick={handleClick}>
      <ExerciseCardMedia url={url} />
      <ExerciseCardContent
        bodyPart={bodyPart}
        equipment={equipment}
        target={target}
        id={id}
      />
      <ExerciseCardModal
        videoUrl={videoUrl}
        open={openModal}
        toggleOpen={toggleOpen}
      />
    </Box>
  );

  const handleDeleteClick = async () => {
    const res = await fetchData(
      null,
      HTTP_METHODS.DELETE,
      ENDPOINTS.EXERCISE,
      CREDENTIALS.INCLUDE,
      id,
    );
    console.log(res);
    toggleFetch();
    if (res.status === 200) {
      handleAlertData({
        severity: 'success',
        displayAlert: true,
        message: 'Successfully deleted exercise',
        timeout: 2000,
      });
    } else {
      handleAlertData({
        severity: 'error',
        displayAlert: true,
        message: 'Something went wrong',
        timeout: 2000,
      });
    }
  };

  return (
    <Card
      key={id}
      onClick={bigCard ? null : handleClick}
      sx={{
        flex: bigCard ? '1 1 20rem' : '1 1 40rem',
        maxWidth: bigCard ? 345 : null,
        margin: '1rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
        ':hover': {
          boxShadow: boxShadowColor
            ? `7px 14px 2px ${boxShadowColor}, 5px 10px 1px ${boxShadowColor}`
            : `7px 14px 2px rgba(86, 100, 210,0.25), 5px 10px 1px rgba(86, 100, 210,0.22)`,
          border: boxShadowColor
            ? `0.1rem solid ${boxShadowColor}`
            : `0.1rem solid rgba(86, 100, 210,1)`,
          cursor: 'pointer',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardHeader sx={{ flex: 1 }} title={title} />
        {user.role === ROLES.COACH && coachId === user.id && (
          <IconButton
            sx={{ flex: 0 }}
            onClick={handleDeleteClick}
            size="large"
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
      <Hidden smDown>{bigCard ? bigCardContent : null}</Hidden>
    </Card>
  );
}
