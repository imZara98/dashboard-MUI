import React,{ useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import { Grid, Typography } from '@mui/material';

const NavBar = ({open,setOpen}) => {
    const handleClick=() =>{
        setOpen(!open)
    }
    const[navbar,setNavbar] = useState(false);
    const changeBackground = () => {
       if(window.scrollY >= 80){
           setNavbar(true)
       }else{
           setNavbar(false)
       }
    }
    window.addEventListener('scroll', changeBackground);
    return(
        <Grid item container columns={2} sm={6} m={2}  
        sx={navbar?
        {display: 'flex',justifyContent: 'space-between',position: 'sticky',top: '10px',width: '100%',zIndex: '999',overflow: 'auto',boxSizing: 'border-box',textAlign: 'center',border: '0.1px solid rgb(207, 206, 206)',padding: '1.7rem',borderRadius: '10px',boxShadow: '0 10px 10px rgba(0, 0, 0, 0.01)',backgroundColor : 'rgba(255,255,255,0.95)'}
        :
        {display: 'flex',justifyContent: 'space-between',backgroundColor:'transparent',padding: '1rem 1rem 1rem 0',margin: '2rem 0 2rem 1rem',width: '100%',zIndex: '999',overflow: 'auto',boxSizing: 'border-box'}}>
            <Grid item >
                <Grid item sx={{display:'flex', flexDirection:'row'}}>
                    <HomeIcon sx={{fontSize:'1.1rem'}}/>
                    <Typography variant='subtitle2'>{"/Dashboard"}</Typography>                 
                </Grid>
                <Typography variant='h6' fontSize='1.2rem'>Dashboard</Typography>
            </Grid>
            <Grid item sx={{display:'flex', flexDirection:'row'}}>
                <TextField id="outlined-basic" label="Search" variant="outlined" size='small' sx={{width:'auto', height:'1rem'}}/>
                <Typography sx={{margin:'0.5rem 2rem 0 1rem', cursor:'pointer'}} >
                    <AccountCircleIcon fontSize='small'/>
                    <SettingsIcon fontSize='small' />
                    <NotificationsIcon fontSize='small' />  
                </Typography>
                <Grid item sx={{display:{md:"none", xs:"block"}, marginRight:'2rem'}} >
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleClick}
                >
                    <MenuIcon fontSize='small' sx={{paddingBottom:'1.5rem'}}/>
                </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default NavBar;