/* eslint-disable @next/next/no-img-element */

export default function Banner() {
  return (
    <div className="banner-layout flex flex-col md:flex-row md:items-center gap-5 sm:gap-12">
      <div className="flex flex-col gap-2">
        <div className="body-3xlarge font-semibold">
          Department of <span className="text-primary-main">C</span>omputer{' '}
          <span className="text-primary-main">S</span>cience and{' '}
          <span className="text-primary-main">E</span>ngineering
        </div>
        <img
          src="https://www.iiitd.ac.in/sites/default/files/images/logo/style3colorlarge.png"
          alt="Logo"
          className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-2/3"
        />
      </div>
      <img
        src="https://pbs.twimg.com/media/ElarDWgU4AAu4a7.jpg"
        alt="Ranking"
        className="flex self-center w-full md:w-1/2 relative"
      />
    </div>
  );
}
