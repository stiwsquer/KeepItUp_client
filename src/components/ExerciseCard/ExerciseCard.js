import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MyCardContent from '../MyCardContent/MyCardContent';
import CardMedia from '../CardMedia/CardMedia';

export default function ExerciseCard({
  id,
  title,
  url,
  bodyPart,
  equipment,
  target,
}) {
  return (
    <Card
      key={id}
      sx={{
        flex: '1 1 20rem',
        maxWidth: 345,
        // maxHeight: 330,
        margin: '1rem',
      }}
    >
      <CardHeader title={title} />
      <CardMedia url={url} />
      <MyCardContent
        bodyPart={bodyPart}
        equipment={equipment}
        target={target}
        id={id}
      />
    </Card>
  );
}
