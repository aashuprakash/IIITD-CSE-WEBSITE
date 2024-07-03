/* eslint-disable @next/next/no-img-element */
import { Avatar, Chip } from '@mui/material';

export default function ProjectCard({
  title,
  faculty,
  faculty_image,
  funded_by,
  year,
  sanction_amount,
}) {
  return (
    <div className="w-full h-full shadow-md bg-white border-solid duration-500 overflow-hidden flex flex-col gap-2 py-2 px-2 hover:scale-105 hover:bg-gray-200 hover:shadow-xl">
      <div className="text-primary-main h-2/5 font-semibold body-normal">
        {title}
      </div>
      <div className="text-primary-main font-semibold text-right body-xsmall">
        {year}
      </div>
      <div className="flex gap-2 items-center pt-2">
        <Avatar
          src={faculty_image}
          alt="Faculty Image"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <div className="font-semibold body-xsmall">{faculty}</div>
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <div className="body-xsmall">
          Funded By :{' '}
          <div className="flex flex-row gap-2 py-1">
            {funded_by?.map((org) => (
              <Chip
                key={org}
                label={org}
                title={org}
                className="font-semibold"
              />
            ))}
          </div>
        </div>
        <div className="body-xsmall flex items-center gap-2">
          {sanction_amount && (
            <>
              Sanction Amount:{' '}
              <div>
                <Chip
                  label={sanction_amount + ' INR'}
                  className="bg-primary-main text-white font-semibold"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
