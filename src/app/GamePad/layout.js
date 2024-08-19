"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { RegisterLink,LoginLink,LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import GamepadIcon from '@mui/icons-material/Gamepad';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MasksIcon from '@mui/icons-material/Masks';
import MouseIcon from '@mui/icons-material/Mouse';
import InstagramIcon from '@mui/icons-material/Instagram';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function GamePad({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router=useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (

    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{borderRadius:"20px",backgroundColor:"black"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none'}) }}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" >
          Thread Symphony
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer

        // PaperProps={{sx:{height:"50vh"}}}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:"black"
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{color:"white"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        
        <Divider  color="white"/>
          {/* <Button><RegisterLink style={{color:"white"}}>Sign in</RegisterLink></Button>

        <Divider  color="white"/>
        <br/><br/>
        <Divider color="white"/>
        <Button startIcon={<LoginIcon/>}><LoginLink style={{color:"white"}}>Login in</LoginLink></Button>
        <Divider  color="white" />
        <br/><br/>
        <Divider  color="white" />
        <Button startIcon={<LogoutIcon/>}><LogoutLink style={{color:"white"}}>Log Out</LogoutLink></Button>
        <Divider  color="white"/> */}


        <Divider color="white"/>
        <Button startIcon={<PhoneAndroidIcon/>} onClick={()=>router.push("/PhoneGlassCase")}>Glass Case</Button>
        <Divider  color="white" />
        <br/><br/>
        <Divider  color="white" />
        <Button startIcon={<PhoneAndroidIcon/>}onClick={()=>router.push("/SublimationPhoneCase")}>Sublimation Phone <br></br> Case</Button>
        <Divider  color="white"/>
        <br/><br/>
        <Divider  color="white" />
        <Button startIcon={<MouseIcon/>}onClick={()=>router.push("/MousePad")}>Mouse Pad</Button>
        <Divider  color="white"/>
        <br/><br/>
        <Divider  color="white" />
        <Button onClick={()=>router.push("/")}>T-Shirt</Button>
        <Divider  color="white"/>
        <br/><br/><br></br>
        <Divider  color="white" />
        <p style={{color:"white",textAlign:"center"}}>DM your custom design <br></br>which you want</p>
        <Link href="https://www.instagram.com/threadsymphony7/" style={{textAlign:"center"}}><Button startIcon={<InstagramIcon/>}>click</Button></Link>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>

            {children}
    </>

  );
}
