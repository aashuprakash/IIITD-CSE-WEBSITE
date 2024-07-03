import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useBottomBarLinks from './links/BottomBarLinks';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Divider } from '@mui/material';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export default function CustomDrawer({ open, anchor, toggleDrawer }) {
  const links = useBottomBarLinks();
  const [openStates, setOpenStates] = useState({});

  const handleClick = (name) => {
    setOpenStates({ ...openStates, [name]: !openStates[name] });
  };
  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer}>
        <List>
          {links.map((link) =>
            link.name === 'Home' ? (
              <Link key={link.name} href="/">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={link.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ) : (
              <ListItem
                key={link.name}
                disablePadding
                className="w-full flex flex-col">
                <ListItemButton
                  onClick={() => handleClick(link.name)}
                  className="w-full">
                  <ListItemText primary={link.name} />
                  {openStates[link.name] ? (
                    <ExpandLess className="text-primary-main" />
                  ) : (
                    <ExpandMore className="text-primary-main" />
                  )}
                </ListItemButton>
                <Collapse
                  className="w-full"
                  in={openStates[link.name]}
                  timeout="auto"
                  unmountOnExit>
                  <List component="div" disablePadding>
                    {link.menuItems.map((item, itemIndex) => (
                      <Fragment key={itemIndex}>
                        {item.link.includes('https') ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <ListItemButton
                              onClick={() => handleClick(item.name)}>
                              <ListItemText primary={item.name} />
                            </ListItemButton>
                          </a>
                        ) : (
                          <Link href={item.link}>
                            <ListItemButton
                              onClick={() => handleClick(item.name)}>
                              <ListItemText primary={item.name} />
                            </ListItemButton>
                          </Link>
                        )}
                      </Fragment>
                    ))}
                  </List>
                  <Divider />
                </Collapse>
              </ListItem>
            ),
          )}
        </List>
      </Box>
    </Drawer>
  );
}
