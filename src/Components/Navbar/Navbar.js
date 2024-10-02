import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../Assets/Navbar/Best QR Logo.png';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleDrawerToggle = () => {
        setOpenMenu(!openMenu);
    };

    const drawer = (
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
            <List>
                {['Home', 'Pricing', 'FAQ', 'Support'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link} to={`/${text}`}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                    onClick={() => alert('Sign In')}
                    className="button-signin"
                    sx={{ width: '80%', mb: 1 }}
                >
                    Sign In
                </Button>
                <Button
                    onClick={() => alert('Sign Up')}
                    className="button-signup"
                    sx={{ width: '80%' }}
                >
                    Sign Up
                </Button>
            </Box>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: '#FFFFFF', padding: '5px 120px', boxShadow: 'none', boxShadow: '0px 4px 4px 0px #9225FF40' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ display: { sm: 'none' } }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img
                                src={logo}
                                alt="logo"
                                style={{ width: '77px', height: '83px', marginRight: '16px' }}
                            />
                        </Link>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/Pricing'}>Pricing</Link>
                                </li>
                                <li>
                                    <Link to={'/FAQ'}>FAQ</Link>
                                </li>
                                <li>
                                    <Link to={'/Support'}>Support</Link>
                                </li>
                                <Button
                                    onClick={() => alert('Sign In')}
                                    className='button-signin'
                                >
                                    Sign In
                                </Button>
                                <Button
                                    onClick={() => alert('Sign Up')}
                                    className='button-signup'
                                >
                                    Sign Up
                                </Button>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor="left"
                open={openMenu}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
