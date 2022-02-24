import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const drawerWidth = 240;

const pages = ['PATIENTS', 'CALENDER', 'USERS', 'BILLING'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <div>
    <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 6, display: { xs: 'none', md: 'flex', }, color: "#000000" }}
          >
            LOGO 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <IconButton
          size="large"
          color="inherit"
        >
            <NotificationsIcon sx={{ color: '#000000'}}/>
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>V</Avatar>
                {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#d1ebfc'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Toolbar />
        <List>
        <Typography  variant='body1' sx={{ my: 1 }}> PATIENTS</Typography>
            <Divider/>
                <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search Patient"
                inputProps={{ 'aria-label': 'search' }}
                />
                </Search>
            <Divider/>

            <ListItem button sx={{ backgroundColor: "#ffffff"}} >
            <Avatar>S</Avatar>
            <ListItemText primary="Sara Simth" secondary="15 Aug 2020" />
            <Brightness1RoundedIcon sx={{ color: "#1ff22a" }} fontSize="small"/>
          </ListItem>
          <Divider/>
          <ListItem button sx={{ backgroundColor: "#ffffff"}}>
            <Avatar>J</Avatar>
            <ListItemText primary="James won" secondary="No clearance" />
            <Brightness1RoundedIcon sx={{ color: '#FF462C' }} fontSize="small"/>
          </ListItem>
          <Divider/>
          <ListItem button sx={{ backgroundColor: "#ffffff"}}>
            <Avatar>R</Avatar>
            <ListItemText primary="Ron Hammer" secondary="19 Aug 2020"/>
            <Brightness1RoundedIcon sx={{ color: "#1ff22a" }} fontSize="small"/>
          </ListItem>
          <Divider/>
          <ListItem button sx={{ backgroundColor: "#ffffff"}}>
            <Avatar>W</Avatar>
            <ListItemText primary="Willy methu" secondary="21 Aug 2020"/>
            <Brightness1RoundedIcon sx={{ color: "#1ff22a" }} fontSize="small"/>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>

    </div>
  );
};


export default ResponsiveAppBar;
