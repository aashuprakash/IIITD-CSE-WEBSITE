/* eslint-disable @next/next/no-img-element */
'use client';

import { Menu } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import CustomDrawer from './CustomDrawer';
import Link from 'next/link';

export default function TopBar() {
  const linkStyle = useMemo(
    () => 'body-xsmall hover:text-primary-main hover:cursor-pointer',
    [],
  );

  const links = useMemo(
    () => [
      {
        name: 'IIIT-Delhi',
        link: 'https://iiitd.ac.in',
        type: 'external',
      },
      {
        name: 'Directory',
        link: 'https://iiitd.ac.in/directory',
        type: 'external',
      },
      {
        name: 'Course Catalog',
        link: '/academics/course-catalog',
        type: 'internal',
      },
      {
        name: 'Labs',
        link: '/research/labs',
        type: 'internal',
      },
      {
        name: 'PhD Admissions',
        link: '/admissions/phd',
        type: 'internal',
      },
      {
        name: 'Events',
        link: '/news-and-events/events',
        type: 'internal',
      },
      {
        name: 'Contact',
        link: '/contact',
        type: 'internal',
      },
    ],
    [],
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex justify-between items-center px-5 md:border-none md:shadow-none shadow-lg">
      <Link href="/">
        <img
          style={{ height: '40px', width: 'auto' }}
          src="/images/layout/header/cseLogo.png"
          alt="Logo"
        />
      </Link>
      <div className="hidden md:flex gap-5">
        {links.map((link, index) => (
          <div key={link.name} className="flex gap-4 items-center">
            {link.type === 'external' ? (
              <a key={link.name} href={link.link} className={linkStyle}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.link}>
                <span className={linkStyle}>{link.name}</span>
              </Link>
            )}
            {index !== links.length - 1 && (
              <span className="bg-primary-main h-3.5 w-0.5"></span>
            )}
          </div>
        ))}
      </div>
      <IconButton
        className="md:hidden p-1"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}>
        <Menu className="text-2xl text-primary-main" />
      </IconButton>
      <CustomDrawer
        open={isDrawerOpen}
        anchor={'right'}
        toggleDrawer={handleDrawerToggle}
      />
    </div>
  );
}
