/* eslint-disable @next/next/no-img-element */
import { modifyGoogleDriveURL } from '@/utils/modifyGoogleDriveURL';
import MailIcon from '@mui/icons-material/Mail';

export default function DevCard({ name, linkedin, image, mail }) {
  const imageLink = image
    ? modifyGoogleDriveURL(image)
    : '/images/people/member.jpeg';

  return (
    <div className="w-full shadow-md bg-white border-solid overflow-hidden">
      <div className="relative h-auto">
        <img
          src={imageLink}
          className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
          loading="lazy"
          alt="Member"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary-main font-semibold body-normal">
            {name}
          </div>
          <div className="flex items-center gap-1">
            {mail && (
              <a href={`mailto:${mail}`}>
                <MailIcon
                  sx={{ fontSize: 25.5 }}
                  className="text-primary-main"
                />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img src="/images/people/linkedin.svg" alt="linkedin" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
