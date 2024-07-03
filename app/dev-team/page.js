import DevCard from '@/components/dev-team/DevCard';

export default function DevTeam() {
  const team = [
    {
      name: 'Aditya Ahuja',
      linkedin: '',
      image: '',
    },
    {
      name: 'Aryan Gupta',
      linkedin: 'https://www.linkedin.com/in/aryangupta09/',
      image:
        'https://drive.google.com/file/d/1h67j91bQ20jKWKz90K2ioQK96sfZm91y/view?usp=sharing',
      mail: 'aryan21314@iiitd.ac.in',
    },
    {
      name: 'Aryan Teng',
      linkedin: '',
      image: '',
    },
    {
      name: 'Pritish Poswal',
      linkedin: '',
      image: '',
    },
    {
      name: 'Ritick Chaudhary',
      linkedin: '',
      image: '',
    },
    {
      name: 'Yugayu Garg',
      linkedin: '',
      image: '',
    },
  ];

  return (
    <div className="grid gap-2 py-2 mx-auto grid-cols-2 sm:gap-4 sm:py-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5 lg:py-5 lg:grid-cols-5 2xl:grid-cols-7 w-11/12 max-w-screen-2xl">
      {team.map((mem, index) => (
        <DevCard key={mem.linkedin} {...mem} />
      ))}
    </div>
  );
}
