import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Hidden } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import ExerciseCardContent from '../ExerciseCardContent/ExerciseCardContent';
import ExerciseCardMedia from '../ExerciseCardMedia/ExerciseCardMedia';
import ExerciseCardModal from '../ExerciseCardModal/ExerciseCardModal';
import { useExerciseCardContext } from '../../Context/ExerciseCardContext';

export default function ExerciseCard({
  id,
  title,
  url,
  bodyPart,
  equipment,
  target,
  boxShadowColor,
}) {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpen = () => setOpenModal(!openModal);
  const [bigCard, , , setExercise] = useExerciseCardContext();

  const bigCardContent = (
    <>
      <ExerciseCardMedia url={url} />
      <ExerciseCardContent
        bodyPart={bodyPart}
        equipment={equipment}
        target={target}
        id={id}
      />
      <ExerciseCardModal open={openModal} toggleOpen={toggleOpen} />
    </>
  );

  const handleClick = () => {
    if (bigCard) {
      toggleOpen();
    } else if (boxShadowColor) {
      setExercise({ id, delete: true });
    } else {
      setExercise({ id, name: title, url, bodyPart, equipment, target });
    }
  };

  return (
    <Card
      key={id}
      onClick={handleClick}
      sx={{
        flex: bigCard ? '1 1 20rem' : '1 1 40rem',
        maxWidth: bigCard ? 345 : null,
        margin: '1rem',
        border: `0.1rem solid rgba(86, 100, 210,1)`,
        ':hover': {
          // transform: bigCard ? 'scale(1.05)' : 'scale(1)',
          boxShadow: boxShadowColor
            ? `0 14px 0px ${boxShadowColor}, 0 10px 0px ${boxShadowColor}`
            : `0 14px 0px rgba(86, 100, 210,0.25), 0 10px 0px rgba(86, 100, 210,0.22)`,
          border: boxShadowColor
            ? `0.1rem solid ${boxShadowColor}`
            : `0.1rem solid rgba(86, 100, 210,1)`,
          // boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`,
          // boxShadow: `0 14px 28px rgba(86, 100, 210,0.25), 0 10px 10px rgba(86, 100, 210,0.22)`,
          cursor: 'pointer',
        },
      }}
    >
      <CardHeader title={title} />
      <Hidden smDown>{bigCard ? bigCardContent : null}</Hidden>
    </Card>
  );
}
