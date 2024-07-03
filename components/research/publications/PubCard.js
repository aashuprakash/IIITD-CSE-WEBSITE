import Link from 'next/link';
import Chip from '@mui/material/Chip';

export default function PubCard({
  title,
  abstract,
  venue,
  color,
  link,
  authors,
}) {
  return (
    <div className="w-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col gap-2 px-2 py-4">
            <div className="flex items-center justify-between">
              <div className="text-primary-main font-semibold body-normal">
                {title}
              </div>
            </div>
            <Chip
              label={venue}
              className="body-small font-semibold"
              style={{ backgroundColor: color }}
            />
            <div className="body-xsmall">{abstract}</div>
            <div className="body-xsmall">{authors.join(', ')}</div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col gap-2 px-2 py-4">
          <div className="flex items-center justify-between">
            <div className="text-primary-main font-semibold body-normal">
              {title}
            </div>
          </div>
          <Chip
            label={venue}
            className="body-small font-semibold"
            style={{ backgroundColor: color }}
          />
          <div className="body-xsmall">{abstract}</div>
          <div className="body-xsmall">{authors.join(', ')}</div>
        </div>
      )}
    </div>
  );
}
