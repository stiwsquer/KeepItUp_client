import React from 'react';
import CardContent from '@mui/material/CardContent';
import ReactPlayer from 'react-player';

export default function CardMedia({ url }) {
  return (
    <>
      <CardContent>
        <ReactPlayer
          controls
          style={{
            maxWidth: 300,
            maxHeight: 180,
          }}
          url={url}
        />
      </CardContent>
    </>
  );
}
