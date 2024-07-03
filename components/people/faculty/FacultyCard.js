/* eslint-disable @next/next/no-img-element */
import { modifyGoogleDriveURL } from '@/utils/modifyGoogleDriveURL';

export default function FacultyCard({
  'faculty image': image,
  name,
  designation,
  education,
  'google scholar': googleScholar,
  linkedin,
  iiitd_page,
  email,
  office,
}) {
  // Check if the name includes "(On Leave)"
  const onLeave = name.includes('On Leave');
  // variable to store if faculty is on leave
  const status = onLeave ? 'On Leave' : '';
  // If faculty is on leave, remove "(On Leave)" from the name
  if (onLeave) {
    name = name.replace('(On Leave)', '');
  }

  const imageLink = image
    ? modifyGoogleDriveURL(image)
    : '/images/people/faculty.png';

  return (
    <div className="w-full shadow-md bg-white border-solid overflow-hidden">
      <div className="relative h-auto">
        <img
          src={imageLink}
          className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
          loading="lazy"
          alt="Faculty"
        />
        {onLeave ? (
          <div className="absolute cursor-default bottom-2 right-2 bg-primary-main text-white py-1 px-3 font-semibold rounded-xl text-sm">
            {status}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary-main font-semibold body-normal">
            <a href={iiitd_page}>{name}</a>
          </div>
          <div className="flex items-center gap-1">
            {googleScholar && (
              <a href={googleScholar} target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/people/faculty/google-scholar.svg"
                  alt="google-scholar"
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
        <div className="body-small font-semibold">{designation}</div>
        <div className="body-xsmall mb-1">{education}</div>
        <div className="body-xsmall">{office}</div>
        <div className="body-xsmall" style={{ marginTop: '-0.5em' }}>
          {email}
        </div>
      </div>
    </div>
  );
}
