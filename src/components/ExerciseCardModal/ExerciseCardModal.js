import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '0px',
  bgcolor: 'rgba(86, 100, 210,1)',
  borderRadius: '10px',
  px: 10,
  paddingTop: 8.5,
  paddingBottom: 10,
};

export default function ExerciseCardModal({ open, toggleOpen }) {
  return (
    <div>
      <Modal open={open} onClose={toggleOpen}>
        <Box sx={style}>
          <ReactPlayer
            controls
            url="https://live.staticflickr.com/video/51656831834/b961c8a268/1080p.mp4?s=eyJpIjo1MTY1NjgzMTgzNCwiZSI6MTYzNzA1OTM0NCwicyI6IjZiZTNiZjUzOGJjN2FmZmRhMTI3MTcxY2ZhNWM1MWIzYzNlYjhkZmYiLCJ2IjoxfQ"
          />
        </Box>
      </Modal>
    </div>
  );
}
