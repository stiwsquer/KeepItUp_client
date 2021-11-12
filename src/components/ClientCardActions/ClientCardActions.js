import { CardActions, IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ExpandMore from '../ExpandMore/ExpandMore';

export default function ClientCardActions({
  expanded,
  handleExpandClick,
  handleDeleteClick,
}) {
  return (
    <CardActions>
      <ExpandMore expand={expanded} onClick={handleExpandClick} color="primary">
        <AddIcon />
      </ExpandMore>
      <IconButton
        sx={{ flex: 0 }}
        onClick={handleDeleteClick}
        size="large"
        color="primary"
      >
        <DeleteIcon />
      </IconButton>
    </CardActions>
  );
}
