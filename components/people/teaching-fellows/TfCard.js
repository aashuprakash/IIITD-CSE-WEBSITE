/* eslint-disable @next/next/no-img-element */
import { modifyGoogleDriveURL } from '@/utils/modifyGoogleDriveURL';

export default function TfCard({ image, name, designation, email }) {
  const imageLink = image
    ? modifyGoogleDriveURL(image)
    : '/images/people/phd.png';

  return (
    <div className="w-full shadow-md bg-white border-solid overflow-hidden">
      <div className="relative h-auto">
        <img
          src={imageLink}
          className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
          loading="lazy"
          alt="Phd"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary-main font-semibold body-normal">
            {name}
          </div>
        </div>
        <div className="body-small font-semibold">{designation}</div>
        <div className="body-xsmall">Email: {email}</div>
      </div>
    </div>
  );
}
