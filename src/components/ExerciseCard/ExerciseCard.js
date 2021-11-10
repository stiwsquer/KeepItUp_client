import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MyCardContent from '../MyCardContent/MyCardContent';
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
      <MyCardContent
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
      setExercise({ id, name: title });
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
        ':hover': {
          transform: bigCard ? 'scale(1.1)' : 'scale(1)',
          // boxShadow: `1rem 0rem 0 rgba(86, 100, 210,1)`,
          boxShadow: boxShadowColor
            ? `1rem 0rem 0 ${boxShadowColor}`
            : `1rem 0rem 0 rgba(86, 100, 210,1)`,
          border: boxShadowColor
            ? `0.1rem solid ${boxShadowColor}`
            : `0.1rem solid rgba(86, 100, 210,1)`,
          cursor: 'pointer',
        },
      }}
    >
      <CardHeader title={title} />
      {bigCard ? bigCardContent : null}
    </Card>
  );
}
