import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChairAltIcon from '@mui/icons-material/ChairAlt';

export default function MyCardContent({ bodyPart, equipment, target, id }) {
  return (
    <CardContent>
      <Typography variant="caption" color="text.secondary">
        <List>
          {[bodyPart, equipment, target].map((text, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={id + index}>
              <ListItemIcon>
                {(() => {
                  switch (index) {
                    case 0:
                      return <AccessibilityIcon />;
                    case 1:
                      return <ChairAltIcon />;
                    case 2:
                      return <AccessibilityIcon />;
                    default:
                      return <AccessibilityIcon />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText sx={{ marginLeft: 1 }} primary={`${text}`} />
            </ListItem>
          ))}
        </List>
      </Typography>
    </CardContent>
  );
}
