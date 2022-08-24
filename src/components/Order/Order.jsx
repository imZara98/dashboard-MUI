import * as React from 'react';
import { Grid,Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { green,grey } from "@mui/material/colors";
import OrderList from './OrderList';

const Order = () => {
    return ( 
        <Container>
            <Grid item container columns={1} md={6}>
                <Card sx={{borderRadius:'0.7rem', height:'582px'}} elevation={3}>
                    <CardHeader 
                    title = {
                        <Typography variant='h6' sx={{color:'#1a237e'}}>
                            Orders overview
                        </Typography>
                    }
                    subheader = {
                        <Typography variant='body2' sx={{color:grey[600]}}>
                            <ArrowUpwardIcon fontSize='small' sx={{color:green[600]}}/>
                            <strong>24%</strong> this month
                        </Typography>
                    }
                    />
                    <CardContent>
                        <OrderList/>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}
 
export default Order;