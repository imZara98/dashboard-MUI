import { Grid, Card, CardHeader,Typography, CardContent } from "@mui/material";
import { grey } from "@mui/material/colors";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {MobileApp,MobileChart,SaleChart} from '../components/Charts';

const Information = () => {
    return ( 
        <Grid>
            <Grid item container rowSpacing={1} columns={{ xs: 12, sm: 6, md: 3 }}  sx={{display:'flex',flexDirection:'row'}}>
                <Card sx={{margin:'1rem',width:'330px', borderRadius:'0.7rem',overflow:'visible'}} elevation={3}>
                    <CardHeader
                    title={
                        <Typography variant="h6" sx={{fontSize:'1rem', color:'#1a237e'}}>
                            <SaleChart />
                            {"Website Views"}
                        </Typography>
                    }
                    subheader= {<Typography variant="body2" color = {grey[600]}>Last Campaign Performance</Typography>}
                    />
                    <CardContent sx={{display:'flex', flexDirection:'row',color :grey[600]}} >
                        <AccessTimeIcon  sx={{marginRight:'0.3rem',fontSize:"1rem"}}/>
                        <Typography variant="body2" >
                            campaign sent 2 days ago
                        </Typography>        
                    </CardContent>
                </Card>
                <Card sx={{margin:'1rem',width:'330px', borderRadius:'0.7rem',overflow:'visible'}} elevation={3}>
                    <CardHeader
                    title={
                        <Typography variant="h6" sx={{fontSize:'1rem', color:'#1a237e'}}>
                            <MobileChart />
                            {"Daily Sales"}
                        </Typography>
                    }
                    subheader= {<Typography variant="body2" color = {grey[600]}>{"(+15%)"} increase in today sales.</Typography>}
                    />
                    <CardContent sx={{display:'flex', flexDirection:'row',color :grey[600]}} >
                        <AccessTimeIcon  sx={{marginRight:'0.3rem',fontSize:"1rem"}}/>
                        <Typography variant="body2" >
                            updated 4 min ago
                        </Typography>        
                    </CardContent>
                </Card>
                <Card sx={{margin:'1rem',width:'330px', borderRadius:'0.7rem',overflow:'visible'}} elevation={3}>
                    <CardHeader
                    title={
                        <Typography variant="h6" sx={{fontSize:'1rem', color:'#1a237e'}}>
                            <MobileApp />
                            {"Completed Tasks"}
                        </Typography>
                    }
                    subheader= {<Typography variant="body2" color = {grey[600]}>Last Campaign Performance</Typography>}
                    />
                    <CardContent sx={{display:'flex', flexDirection:'row',color :grey[600]}} >
                        <AccessTimeIcon  sx={{marginRight:'0.3rem',fontSize:"1rem"}}/>
                        <Typography variant="body2" >
                            just update
                        </Typography>        
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
export default Information;