import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CancelIcon from '@mui/icons-material/Cancel';
import { List, Grid, Typography, Button, Drawer, Link} from '@mui/material';

const Menuu = ({open,setOpen}) => {
    const handleClick= () => {
        setOpen(!open)
    }
    return ( 
        <Drawer open={open}  role="presentation" sx=
        {{ color: '#c3c4c5', padding: '1.5rem',
        width: '15rem',height: '100%',
        margin: '0 0.5rem 0 1rem',
        borderRadius: '0.8rem',
        paddingBottom: '2rem',
        display:{md:"none", xs:"block"}
        }}
       >
            <Grid item sx={{backgroundColor: 'rgb(54, 45, 45)', height:'100vh',padding:'2rem', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <Typography variant='h6' sx={{fontSize:'1rem', display:'flex', flexDirection:'row', color:'#fff'}}>
                    <WidgetsOutlinedIcon sx={{margin:'0 0.2rem'}}/>
                    {"Material Dashboard 2"}
                    <Grid sx={{display:{md:"none", xs:"block"}}}><CancelIcon onClick={handleClick} sx={{}}/></Grid>
                </Typography>
                <List sx={{display: 'flex', flexDirection: 'column',justifyContent:'flex-start', alignItems:'flex-start'}}>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <DashboardIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            Dashboard
                        </Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <TableViewIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}}/>
                        <Link href='/tables' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>Tables</Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <ReceiptLongIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}}/>
                        <Link href='/billing' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            Billing
                        </Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <FormatTextdirectionRToLIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}}/>
                        <Link href='/rtl' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            RTL
                        </Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <NotificationsIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/notifications' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            Notificatins
                        </Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <PersonIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/profile' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            Profile
                        </Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <LoginIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/sign-in' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            Sign In
                        </Link>
                    </Button>
                    <Button sx={{padding:'1rem 0.5rem', margin:'0.5rem 0'}}>
                        <AssignmentIcon fontSize='small' sx={{fontSize:'1.5rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/sign-Up' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem'}}>
                            Sign Up
                        </Link>
                    </Button>
                </List>
                <Button sx={{  color: '#fff',
                    fontWeight: 'bold',
                    marginTop: '1rem',
                    backgroundColor: 'rgb(0, 132, 255)',
                    padding: '0.7rem',
                    borderRadius: '0.8rem',
                    width: '100%',
                    border: 'none',}}>Upgrade To Pro</Button>
            </Grid>
        </Drawer>
    );
}
export default Menuu;