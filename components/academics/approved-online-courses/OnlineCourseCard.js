/* eslint-disable @next/next/no-img-element */
import HourGlass from '@mui/icons-material/HourglassBottomTwoTone';
import ScholarHat from '@mui/icons-material/School';
import { Avatar, Button } from '@mui/material';

function OnlineCourseCard({
  title,
  link,
  faculty,
  description,
  weeks,
  registrations,
  facultyimage,
  platform,
}) {
  const x = Math.floor(Math.random() * 11) + 1;
  const imageSrc = `/images/approved-online-courses/onlineCourses_${x}.jpg`;

  return (
    <div className="shadow-md hover:shadow-xl bg-white border-solid duration-500 overflow-hidden flex flex-col">
      <div className="flex-grow">
        <div className="relative h-auto">
          <img
            src={imageSrc}
            className="object-cover h-48 border-b-1 w-full opacity-90 brightness-50"
            loading="lazy"
            alt="IOT"
          />
          {/* Overlay Button */}
          <div className="absolute cursor-default bottom-2 right-2 bg-primary-main text-white py-1 px-3 font-semibold rounded-xl text-sm">
            {platform}
          </div>
          <h1 className="absolute top-1/3 left-2 text-white font-bold text-3xl">
            {title}
          </h1>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2">
          <div className="text-xs leading-5 line-clamp-5">{description}</div>
          <div className="flex gap-4 items-center justify-between">
            <div
              id="faculty"
              className="text-primary-main py-2 font-semibold body-normal">
              <div className="flex gap-2 items-center">
                <Avatar src={facultyimage} />
                <div className="cursor-pointer text-xs">{faculty}</div>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex flex-row">
                <HourGlass className="text-primary-main body-normal" />
                <span className="text-xs flex items-center whitespace-nowrap">
                  {weeks} weeks
                </span>
              </div>
              <div className="flex flex-row">
                <ScholarHat className="text-primary-main body-normal" />
                <span className="text-xs ml-1 flex items-center whitespace-nowrap">
                  {registrations}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Button at the bottom */}
      <Button
        href={link}
        variant="contained"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-primary-main text-white font-semibold">
        Start
      </Button>
    </div>
  );
}

export default OnlineCourseCard;
