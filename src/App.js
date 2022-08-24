import * as React from 'react';
import Menuu from './components/Menu/Menuu';
import ItemMenu from './components/Menu/ItemMenu';
import Features from './components/Features';
import Information from './components/Information';
import Project from './components/Proje/Project';
import Order from './components/Order/Order';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import { Grid } from "@mui/material";
import {useState} from "react";

const App = () => {
  const [open,setOpen] = useState(true);
  return ( 
    <Grid item sx={{display:'flex', flexDirection:'row'}}>
      <Grid item>
        <Grid item sx={{position: 'sticky',top: '1rem',display:{md:"inline-block", xs:"none"}}}>
          <ItemMenu />
        </Grid>
        <Grid item>
            <Menuu open={open} setOpen={setOpen}/>
        </Grid>
      </Grid>
      <Grid item sx={{display:'flex', flexDirection:'column',overflowX: 'hidden'}}>
        <Grid item>
          <NavBar open={open} setOpen={setOpen}/>
        </Grid>
        <div>
          <Features />
        </div>
        <div>
          <Information />
        </div>
        <div style={{display:'flex',flexDirection:'row',height:'100%', margin:'0 1rem'}}>
          <div><Project /></div>
          <div><Order /></div>
        </div>
        <div>
          <Footer />
        </div>
      </Grid>
    </Grid>
   );
}
export default App;