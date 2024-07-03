import BasicMenu from './BasicMenu';
import useBottomBarLinks from './links/BottomBarLinks';

export default function BottomBar() {
  const links = useBottomBarLinks();

  return (
    <div className="hidden md:flex gap-12 justify-center border-t-2 py-1 shadow-md">
      {links.map((link) => (
        <BasicMenu
          key={link.name}
          name={link.name}
          menuItems={link.menuItems}
        />
      ))}
    </div>
  );
}
