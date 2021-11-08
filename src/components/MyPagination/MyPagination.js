import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function MyPagination({
  nextPage,
  prevPage,
  handlePrevPage,
  handleNextPage,
  page,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        my: 3,
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        disabled={!prevPage}
        size="large"
        color="primary"
      >
        <NavigateBeforeIcon />
      </IconButton>
      <Typography variant="h5">{page}</Typography>

      <IconButton
        onClick={handleNextPage}
        disabled={!nextPage}
        size="large"
        color="primary"
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}
