'use client';
import PhdCard from '@/components/people/phd/PhdCard';
import { SearchOutlined } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useState, useMemo } from 'react';

export default function Phd({ phdStudents }) {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPhDStudents = useMemo(() => {
    return phdStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.advisor.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [phdStudents, searchQuery]);

  return (
    <>
      <Box className="flex width-layout-1 justify-center items-center pb-4">
        <TextField
          value={searchQuery}
          onChange={handleSearchQueryChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          placeholder="Search by name or advisor"
          className="flex-1 min-w-[300px]"
        />
      </Box>
      <div className="grid gap-2 py-2 mx-auto grid-cols-2 sm:gap-4 sm:py-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5 lg:py-5 lg:grid-cols-5 2xl:grid-cols-7 w-11/12 max-w-screen-2xl">
        {filteredPhDStudents.map((p, i) => (
          <PhdCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}
