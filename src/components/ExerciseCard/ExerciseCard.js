import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MyCardContent from '../MyCardContent/MyCardContent';
import ExerciseCardMedia from '../ExerciseCardMedia/ExerciseCardMedia';
import ExerciseCardModal from '../ExerciseCardModal/ExerciseCardModal';

export default function ExerciseCard({
  id,
  title,
  url,
  bodyPart,
  equipment,
  target,
}) {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpen = () => setOpenModal(!openModal);

  return (
    <Card
      key={id}
      sx={{
        flex: '1 1 20rem',
        maxWidth: 345,
        margin: '1rem',
        ':hover': {
          transform: 'scale(1.1)',
          boxShadow: '1rem 0rem 0 rgba(86, 100, 210,1)',
          border: '0.1rem solid rgba(86, 100, 210,1)',
          cursor: 'pointer',
        },
      }}
      onClick={() => {
        toggleOpen();
      }}
    >
      <CardHeader title={title} />
      <ExerciseCardMedia url={url} />
      <MyCardContent
        bodyPart={bodyPart}
        equipment={equipment}
        target={target}
        id={id}
      />
      <ExerciseCardModal open={openModal} toggleOpen={toggleOpen} />
    </Card>
  );
}
