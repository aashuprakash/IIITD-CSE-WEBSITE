'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios';
import PubCard from '@/components/research/publications/PubCard';
import { format, set } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { InputAdornment, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Typography } from '@mui/material';
import { Pagination } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';
import useMediaQuery from '@mui/material/useMediaQuery';

const parserOptions = {
  compact: true,
  spaces: 4,
  ignoreComment: true,
  ignoreDeclaration: true,
  ignoreInstruction: true,
};

const ParsePublicationData = (pubData) => {
  let pubType;
  const parsedData = [];
  pubData.forEach((item) => {
    if ('article' in item) {
      pubType = item.article;
    } else if ('inproceedings' in item) {
      pubType = item.inproceedings;
    }
    if (pubType === undefined || pubType.author === undefined) return;
    let venue, category;
    if (
      pubType._attributes.key.includes('journals/corr/') &&
      pubType._attributes.publtype === 'informal'
    ) {
      category = 'arXiv';
      venue = pubType.journal._text + ' ' + pubType.year._text;
    } else if (pubType._attributes.key.includes('journals/')) {
      category = 'Journal';
      venue = pubType.journal._text + ' ' + pubType.year._text;
    } else if (pubType._attributes.key.includes('conf/')) {
      category = 'Conference';
      venue = pubType.booktitle._text + ' ' + pubType.year._text;
    }
    let parsedEntry = {
      title: pubType.title._text,
      authors: pubType.author?.map((author) => author._text),
      date: pubType._attributes.mdate,
      link: pubType.ee._text,
      uuid: uuidv4(),
      category: category,
      venue: venue,
    };
    parsedData.push(parsedEntry);
  });
  return parsedData.slice(0, 40);
};

export default function PublicationsList({ dblpIds }) {
  const [publications, setPublications] = useState([]);
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString(),
  );
  const parser = require('xml-js');

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryChange = useCallback((event) => {
    setSelectedCategories((prevCategories) => {
      if (event.target.checked) {
        return [...prevCategories, event.target.name];
      } else {
        return prevCategories.filter(
          (category) => category !== event.target.name,
        );
      }
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const fetchPubs = useCallback(() => {
    setLoading(true);
    const safeDblpIds = Array.isArray(dblpIds) ? dblpIds : [];

    const requests = safeDblpIds.map(async (dplpId) => {
      return axios
        .get('https://dblp.org/pid/' + dplpId + '.xml')
        .then((response) => {
          const parsedData = parser.xml2js(response.data, parserOptions);
          return ParsePublicationData(parsedData.dblpperson.r);
        })
        .catch((error) => {
          return [];
        });
    });
    if (requests.length > 0) {
      Promise.all(requests).then((results) => {
        const allPublications = [...new Set(results.flat())];
        setPublications(allPublications);
        setLoading(false);
      });
    } else {
      setPublications([]);
      setLoading(false);
    }
  }, [dblpIds, parser]);

  useEffect(() => {
    fetchPubs();
  }, [fetchPubs]);

  const years = [
    ...new Set(publications.map((pub) => pub.date.slice(0, 4))),
  ].sort((a, b) => b - a);

  const matches = useMediaQuery('(min-width:600px)');
  const itemsPerPage = matches ? 12 : 8; // 12 items for larger screens, 8 for smaller screens
  const [page, setPage] = useState(1);

  const handleYearChange = useCallback((_, newValue) => {
    setSelectedYear(newValue);
    setPage(1);
  }, []);

  const filteredPublications = useMemo(() => {
    return publications.filter(
      (pub) =>
        pub.authors.some((author) =>
          author.toLowerCase().includes(searchQuery.toLowerCase()),
        ) &&
        (selectedYear === '' ||
          format(new Date(pub.date), 'yyyy') === selectedYear) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(pub.category)),
    );
  }, [publications, selectedYear, searchQuery, selectedCategories]);

  const noOfPages = Math.ceil(filteredPublications.length / itemsPerPage);

  const colors = [
    '#B8D0EA',
    '#D4BACD',
    '#EEEECD',
    '#9CD1CE',
    '#E1BEBE',
    '#BFB3D7',
  ];
  let clr = 0;
  const optimizedPublications = filteredPublications
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    .map((pub, index) => {
      const color = colors[index % colors.length];
      return (
        <PubCard
          key={pub.uuid}
          title={pub.title}
          venue={pub.venue}
          color={color}
          authors={pub.authors.slice(0, 6)}
          link={pub.link}
        />
      );
    });

  return (
    <>
      <Box className="w-full overflow-x-auto">
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
            placeholder="Search by author"
            className="flex-1 min-w-[300px]"
          />
        </Box>
        <Box className="flex justify-center items-center overflow-x-auto min-w-max mb-2">
          <Tabs
            value={selectedYear}
            onChange={handleYearChange}
            className="border-b border-gray-300">
            {years.map((year) => (
              <Tab key={year} label={year} value={year} />
            ))}
          </Tabs>
        </Box>
        <Box className="flex justify-center items-center overflow-x-auto min-w-max">
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange}
                name="Journal"
                size="small"
              />
            }
            label={
              <Typography
                className="body-xsmall"
                style={{ fontFamily: 'Roboto', color: '#757575' }}>
                Journal
              </Typography>
            }
            className="ml-1"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange}
                name="Conference"
                size="small"
              />
            }
            label={
              <Typography
                className="body-xsmall"
                style={{ fontFamily: 'Roboto', color: '#757575' }}>
                Conference
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleCategoryChange}
                name="arXiv"
                size="small"
              />
            }
            label={
              <Typography
                className="body-xsmall"
                style={{ fontFamily: 'Roboto', color: '#757575' }}>
                arXiv
              </Typography>
            }
          />
        </Box>
      </Box>
      {loading ? (
        <div className="flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="var(--primary-main)"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
          {optimizedPublications}
        </div>
      )}
      <div className="flex justify-center">
        <Pagination
          shape="rounded"
          count={noOfPages}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </>
  );
}
