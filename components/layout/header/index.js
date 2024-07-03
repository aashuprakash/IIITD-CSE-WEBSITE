import BottomBar from './BottomBar';
import TopBar from './TopBar';

export default function Header() {
  return (
    <div className="top-0 sticky bg-white z-10">
      <TopBar />
      <BottomBar />
    </div>
  );
}
