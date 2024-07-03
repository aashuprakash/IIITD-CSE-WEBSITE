import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import themeConstants from '@/theme/themeConstants';

const BatchSelect = ({ batches, onBatchChange }) => {
  const [selectedBatch, setSelectedBatch] = useState(batches[0]);

  const handleChange = (event) => {
    const newBatch = event.target.value;
    setSelectedBatch(newBatch);
    onBatchChange(newBatch);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120, width: 'auto', m: 1 }}>
      <Select
        id="batch-select"
        value={selectedBatch}
        onChange={handleChange}
        sx={{
          color: 'white',
          backgroundColor: themeConstants.primary.main,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
          borderRadius: '20px',
        }}>
        {batches.map((batch) => (
          <MenuItem
            key={batch}
            value={batch}
            sx={{
              color: themeConstants.primary.main,
            }}>
            {batch}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BatchSelect;
