/* eslint-disable @next/next/no-img-element */
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src="https://iiitd.ac.in/sites/default/files/images/iiitdrndblock.jpeg"
        alt="404"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center gap-4 z-10">
        <div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white">
            404
          </h1>
          <h2 className="body-2xlarge font-semibold">Page Not Found</h2>
          <h3 className="body-xsmall sm:body-xlarge">
            Oops! The page you are looking for does not exist.
          </h3>
        </div>
        <Button
          variant="contained"
          href="/"
          className="w-fit body-small bg-primary-main">
          Return to Home Page
        </Button>
      </div>
    </div>
  );
}
