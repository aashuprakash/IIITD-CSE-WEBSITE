/* eslint-disable @next/next/no-img-element */

export default function ResearchCard({ icon, name }) {
  return (
    <div
      className="hover:transform hover:-translate-z-1 w-44 hover:scale-105 hover:shadow-xl 
        border flex flex-col">
      <div className="bg-primary-light">
        <div className="p-8 flex justify-center items-center">
          <img src={icon} alt="Icon" className="w-24 h-20" />
        </div>
      </div>
      <div className="h-3/5 font-semibold p-3 text-sm text-center shadow-lg text-primary-main">
        {name}
      </div>
    </div>
  );
}
