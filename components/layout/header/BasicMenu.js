'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';

export default function BasicMenu({ name, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {name === 'Home' ? (
        <Link href="/">
          <button type="button" className="body-xsmall hover:text-primary-main">
            {name}
          </button>
        </Link>
      ) : (
        <>
          <button
            type="button"
            className="body-xsmall hover:text-primary-main"
            onClick={handleClick}
            aria-haspopup="true"
            aria-controls="basic-menu"
            aria-expanded={open ? 'true' : undefined}>
            {name}
            <KeyboardArrowDownIcon className="body-normal text-gray-500 hover:text-primary-main" />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock={true}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            {menuItems?.map((item) => (
              <div key={item.link}>
                {item.link.includes('https') ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <MenuItem
                      className="body-xsmall hover:text-primary-main hover:cursor-pointer"
                      key={item.link}>
                      {item.name}
                    </MenuItem>
                  </a>
                ) : (
                  <Link href={item.link}>
                    <MenuItem
                      className="body-xsmall hover:text-primary-main hover:cursor-pointer"
                      key={item.link}>
                      {item.name}
                    </MenuItem>
                  </Link>
                )}
              </div>
            ))}
          </Menu>
        </>
      )}
    </>
  );
}

BasicMenu.propTypes = {
  name: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
