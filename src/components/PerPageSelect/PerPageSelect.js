import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function PerPageSelect({ limit, handleLimitChange, values }) {
  return (
    <Select
      sx={{ width: 100, ml: 1 }}
      value={limit}
      onChange={handleLimitChange}
    >
      {values.map((value) => (
        <MenuItem value={value}>{value}</MenuItem>
      ))}
    </Select>
  );
}
