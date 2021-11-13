import { CardActions, IconButton } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMore from '../ExpandMore/ExpandMore';

export default function CalendarCardActions({
  expanded,
  handleExpandClick,
  handleFetchDelete,
}) {
  return (
    <CardActions>
      <ExpandMore expand={expanded} onClick={handleExpandClick} color="primary">
        <AddIcon />
      </ExpandMore>
      <IconButton
        sx={{ flex: 0 }}
        onClick={handleFetchDelete}
        size="large"
        color="primary"
      >
        <DeleteIcon />
      </IconButton>
    </CardActions>
  );
}
