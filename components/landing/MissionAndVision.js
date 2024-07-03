/* eslint-disable @next/next/no-img-element */

export default function MissionAndVision() {
  return (
    <div>
      <div className="banner-layout flex md:flex-row flex-col justify-between items-center md:gap-10 gap-5">
        <img
          src="https://iiitd.ac.in/sites/default/files/images/iiitdrndblock.jpeg"
          alt="Mission&Vision"
          className="flex self-center w-full md:w-1/2 aspect-[5/3] relative"
        />
        <div className="flex flex-col gap-4">
          <div className="body-2xlarge font-semibold">Mission and Vision</div>
          <div className="body-xsmall">
            The department aspires to be a world-class entity dedicated to
            carrying out advanced research and development in various areas of
            computer science, as well as the application of computer and
            software technologies in different domain areas. We aim to train and
            educate engineers of outstanding ability at both undergraduate and
            postgraduate levels, fostering innovators and new product creators.
            <br />
            <br />
            Our goal is to be globally respected for our research capability,
            with certain research groups recognized as leaders both
            internationally and within the country. We strive to maintain
            thriving undergraduate and postgraduate programs that are socially
            relevant, globally connected, and closely aligned with industry
            needs.
          </div>
        </div>
      </div>
    </div>
  );
}
