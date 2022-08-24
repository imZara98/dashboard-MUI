import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Typography } from "@mui/material";
import { grey,green,deepOrange,lightBlue,amber,pink } from "@mui/material/colors";


export default function OrderList() {
  return (
    <List>
      <ListItem sx={{padding:'1rem 0 0.3rem 0.5rem'}}>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:green[600],width:'2rem',height:'2rem'}}>
            <NotificationsIcon fontSize='small' sx={{fontSize:'1rem'}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={
        <Typography variant='subtitle2'>$2400, Design changes</Typography>
        } 
        secondary={<Typography variant='body2' sx={{fontSize:'0.8rem', color:grey[600]}}>22 DEC 7:20 PM</Typography>}
        />
      </ListItem>
      <ListItem sx={{padding:'1rem 0 0.3rem 0.5rem'}}>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:deepOrange[600],width:'2rem',height:'2rem'}}>
            <InventoryIcon fontSize='small'sx={{fontSize:'1rem'}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={<Typography variant='subtitle2'>New order #1832412</Typography>} 
        secondary={<Typography variant='body2' sx={{fontSize:'0.8rem', color:grey[600]}}>21 DEC 11 PM</Typography>} 
        />
      </ListItem>
      <ListItem sx={{padding:'1rem 0 0.3rem 0.5rem'}}>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:lightBlue[700],width:'2rem',height:'2rem'}}>
            <LocalGroceryStoreIcon fontSize='small'sx={{fontSize:'1rem'}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={<Typography variant='subtitle2'>Server payments for April</Typography>} 
        secondary= {<Typography variant='body2' sx={{fontSize:'0.8rem', color:grey[600]}}>21 DEC 9:34 PM</Typography>} 
        />
      </ListItem>
      <ListItem sx={{padding:'1rem 0 0.3rem 0.5rem'}}>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:amber[700],width:'2rem',height:'2rem'}}>
            <CreditCardIcon fontSize='small'sx={{fontSize:'1rem'}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary = {<Typography variant='subtitle2'>New card added for order #4395133</Typography>}
        secondary = {<Typography variant='body2' sx={{fontSize:'0.8rem', color:grey[600]}}>20 DEC 2:20 AM</Typography>}
        />
      </ListItem>
      <ListItem sx={{padding:'1rem 0 2rem 0.5rem'}}>
        <ListItemAvatar>
          <Avatar sx={{bgcolor:pink[500],width:'2rem',height:'2rem'}}>
            <KeyIcon fontSize='small' sx={{fontSize:'1rem'}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary= {<Typography variant='subtitle2'>New card added for order #4395133</Typography>}
        secondary={<Typography variant='body2' sx={{fontSize:'0.8rem', color:grey[600]}}>18 DEC 4:54 AM</Typography>}
        />
      </ListItem>
    </List>
  );
}
