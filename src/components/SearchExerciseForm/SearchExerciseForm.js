import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

export default function SearchExerciseForm({ handleChange }) {
  return (
    <form
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      <SearchIcon
        fontSize="large"
        style={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        color="primary"
      />

      <TextField
        variant="outlined"
        fullWidth
        label="Search for exercises"
        name="exercise"
        type="text"
        onChange={handleChange}
      />
    </form>
  );
}
