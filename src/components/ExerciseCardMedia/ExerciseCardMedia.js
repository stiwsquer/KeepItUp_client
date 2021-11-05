import React from 'react';
import CardContent from '@mui/material/CardContent';
// import ReactPlayer from 'react-player';
import { CardMedia } from '@mui/material';

export default function ExerciseCardMedia({ url }) {
  return (
    <>
      <CardContent>
        <CardMedia component="img" height="194" width="300" image={url} />
      </CardContent>
    </>
  );
}
