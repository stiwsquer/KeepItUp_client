import React from 'react';
import CardContent from '@mui/material/CardContent';
// import ReactPlayer from 'react-player';
import { CardMedia } from '@mui/material';

export default function CardMediaa({ url }) {
  return (
    <>
      <CardContent>
        {/* <ReactPlayer
          // controls
          style={{
            maxWidth: 300,
            maxHeight: 180,
          }}
          url={url}
        /> */}
        <CardMedia
          component="img"
          maxHeight="194"
          maxWidth="300"
          image={url}
          alt="Paella dish"
        />
      </CardContent>
    </>
  );
}
