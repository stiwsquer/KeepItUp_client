import { CardContent, Collapse } from '@mui/material';
import React from 'react';

export default function ExpandCard({ children, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>{children}</CardContent>
    </Collapse>
  );
}
