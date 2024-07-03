/* eslint-disable @next/next/no-img-element */
'use client';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { useMemo } from 'react';
import Link from 'next/link';

export default function Footer() {
  const iconStyle = useMemo(() => 'text-primary-main body-2xlarge', []);

  const socials = useMemo(
    () => [
      {
        name: 'Facebook',
        icon: <FacebookRoundedIcon className={iconStyle} />,
        link: 'https://www.facebook.com/cseiiitd/',
      },
      {
        name: 'Instagram',
        icon: <InstagramIcon className={iconStyle} />,
        link: 'https://www.instagram.com/cseiiitd/',
      },
      {
        name: 'LinkedIn',
        icon: <LinkedInIcon className={iconStyle} />,
        link: 'https://www.linkedin.com/company/cseiiitd/',
      },
      {
        name: 'Twitter',
        icon: <XIcon className={iconStyle} />,
        link: 'https://twitter.com/cseiiitd/',
      },
    ],
    [iconStyle],
  );

  return (
    <div className="mt-auto border-t-2 px-5 py-2.5 flex justify-between items-center">
      <a href="https://iiitd.ac.in/" rel="noopenner noreferrer" target="_blank">
        <img
          src="https://www.iiitd.ac.in/sites/default/files/images/logo/style3colorlarge.png"
          alt="Logo"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
        />
      </a>
      <div className="flex items-center gap-2.5">
        <Link href="/dev-team">
          <span className="body-xsmall text-gray-700 hover:text-primary-main hover:cursor-pointer whitespace-nowrap">
            Dev team
          </span>
        </Link>
        <span
          style={{ backgroundColor: '#939598' }}
          className="h-7 w-0.5"></span>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
