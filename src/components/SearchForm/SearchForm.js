import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Hidden, TextField } from '@mui/material';

export default function SearchForm({ handleChange }) {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Hidden smDown>
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
      </Hidden>

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
