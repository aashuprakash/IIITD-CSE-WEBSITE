function LocationMap({ src }) {
  return (
    <div className="relative w-full">
      <iframe
        src={src}
        className="absolute top-0 left-0 w-full h-96"
        allowFullScreen
        loading="lazy"
        aria-hidden="false"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default LocationMap;
