/* eslint-disable @next/next/no-img-element */

export default function EventsCard({ title, imageLink, description }) {
  return (
    // Define the card container with responsive width
    <div className="w-full h-full shadow-md bg-white border-solid overflow-hidden">
      <div className="w-full overflow-hidden">
        <img
          src={imageLink}
          alt={`${title}`}
          className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-primary-main font-semibold body-small">{title}</h3>
        <p className="body-xsmall text-justify">{description}</p>
      </div>
    </div>
  );
}
