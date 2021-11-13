import React, { useState } from 'react';

import Button from '@mui/material/Button';
import CalendarCard from '../CalendarCard/CalendarCard';
import ExpandCard from '../ExpandCard/ExpandCard';

export default function ClientCalendars({ data }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <Button
        sx={{ mb: 1 }}
        variant="contained"
        color="primary"
        onClick={handleExpandClick}
        fullWidth
      >
        Calendar
      </Button>
      <ExpandCard expanded={expanded}>
        {data &&
          data.map((card) => (
            <>
              <CalendarCard
                key={card.id}
                id={card.id}
                client={card.client}
                coach={card.coach}
                workout={card.workout}
                date={card.date}
              />
            </>
          ))}
      </ExpandCard>
    </div>
  );
}
