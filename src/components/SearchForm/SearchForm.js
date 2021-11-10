import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

export default function SearchForm({ handleChange }) {
  return (
    <div
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
        label="Search"
        name="exercise"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
