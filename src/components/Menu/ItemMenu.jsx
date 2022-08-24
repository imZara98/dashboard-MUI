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
import { List, Grid, Typography, Button, Card, Link, Fab} from '@mui/material';

const ItemMenu = () => {
    return ( 
        <Card  sx=
        {{ position: 'sticky',
            top: '0.5rem',
            right: '40%',
            color: '#fff',
            backgroundColor: 'rgb(54, 45, 45)',
            padding: '1.3rem',
            width: '12rem',
            margin: '1rem 0.5rem',
            fontSize: '1.6rem',
            borderRadius: '10px',
            
        }}
       >
            <Grid item >
                <Typography variant='h6' sx={{fontSize:'1rem', display:'flex', flexDirection:'row'}}>
                    <WidgetsOutlinedIcon sx={{marginRight:'0.2rem'}}/>
                    {"Material Dashboard 2"}
                  
                </Typography>
                <List sx={{display: 'flex', flexDirection: 'column',justifyContent:'flex-start', alignItems:'flex-start'}}>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <DashboardIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            Dashboard
                        </Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <TableViewIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}}/>
                        <Link href='/tables' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>Tables</Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <ReceiptLongIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}}/>
                        <Link href='/billing' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            Billing
                        </Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <FormatTextdirectionRToLIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}}/>
                        <Link href='/rtl' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            RTL
                        </Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <NotificationsIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/notifications' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            Notificatins
                        </Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <PersonIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/profile' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            Profile
                        </Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <LoginIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/sign-in' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            Sign In
                        </Link>
                    </Button>
                    <Button sx={{padding:'0.6rem', margin:'0.3rem 0'}}>
                        <AssignmentIcon fontSize='small' sx={{fontSize:'1.2rem',color:'#fff',marginTop: '0.3rem',marginRight:'0.3rem'}} />
                        <Link href='/sign-Up' style={{textDecoration:'none', color:'#fff',fontSize:'0.8rem', fontWeight:'400', marginTop:'0.5rem'}}>
                            Sign Up
                        </Link>
                    </Button>
                </List>
                <Fab sx={{  color: '#fff',
                    fontWeight: 'bold',
                    marginTop: '1rem',
                    backgroundColor: 'rgb(0, 132, 255)',
                    padding: '0.7rem',
                    borderRadius: '0.8rem',
                    width: '100%',
                    border: 'none',}}>Upgrade To Pro</Fab>
            </Grid>
        </Card>
    );
}
export default ItemMenu;