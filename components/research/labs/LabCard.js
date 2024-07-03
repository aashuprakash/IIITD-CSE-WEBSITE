/* eslint-disable @next/next/no-img-element */

export default function LabCard({ name, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full">
      <div className="w-full h-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
        <div className="relative w-full overflow-hidden h-72 border-b-2">
          <img
            src={image}
            className="absolute top-0 left-0 w-full h-full object-contain"
            loading="lazy"
            alt="Lab Logo"
          />
        </div>
        <div className="flex flex-col gap-2 px-2 py-4">
          <div className="text-primary-main font-semibold body-large">
            {name}
          </div>
          <div className="body-xsmall">{description}</div>
        </div>
      </div>
    </a>
  );
}
