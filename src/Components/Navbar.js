import React from 'react';
import Logo from '../Assets/Logo.svg'
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import List from '@mui/material/List';

import{
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { CommentRounded } from '@mui/icons-material';

function Navbar() {
  
  const [openMenu,setOpenMenu] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenMenu(open);
  };

  const menuOptions=[
    
    {
        text:"Home",
        icon:<HomeIcon/>
    },
    {
        text:"About",
        icon:<InfoIcon/>
    },
    {
        text:"Testimonials",
        icon:<CommentRounded/>
    },
    {
        text:"Contact",
        icon:<PhoneRoundedIcon/>
    },
    {
        text:"Cart",
        icon:<ShoppingCartRoundedIcon/>
    }
    
  ]
    return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt=""/>
        </div>
        <div className='navbar-links-container'>
            <a href="https://www.linkedin.com/in/aryan-kumar-a860ba187/">Home</a>
            <a href=https://www.linkedin.com/in/aryan-kumar-a860ba187/">About</a>
            <a href="https://www.linkedin.com/in/aryan-kumar-a860ba187/">Testimonials</a>
            <a href="https://www.linkedin.com/in/aryan-kumar-a860ba187/">Contact</a>
            <a href="https://www.linkedin.com/in/aryan-kumar-a860ba187/">
                <BsCart2  className='navbar-cart-icon'/>
            </a>
            <button className='primary-button'>Bookings Now</button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)} />
        </div>
        <Drawer
            anchor="right"
            open={openMenu}
            onClose={toggleDrawer(false)}
            >
            <Box
                sx={{width:300}}
                role="presentation"
                onClick={()=>setOpenMenu(false)}
                onKeyDown={()=> setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar;
