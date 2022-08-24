import { Grid,Card, CardHeader, CardContent, Typography } from "@mui/material";
import { features } from "../data";
import { Container } from "@mui/system";
import { green,grey } from "@mui/material/colors";

const Features = () => {
    return ( 
        <Container>
            <Grid container item columns={4} sm={6} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                {features.map(feature => (
                    <Card elevation={3} sx={{margin:'1rem',borderRadius:'1rem',width:'220px',height:'150px',overflow:'visible'}} key={feature.id}>
                        <CardHeader 
                            action={
                            <Typography sx={{borderRadius:'1rem', color: grey[50]}}>{feature.icons}</Typography>
                           }
                            title={
                                <Typography variant="body1" color={grey[500]} sx={{fontSize:'0.9rem'}}>{feature.property}</Typography>
                            } 
                            subheader = {
                                <Typography variant="h6">{feature.count}</Typography>
                                }  
                            sx={{dispaly:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}
                        />
                        <CardContent sx={{display:'flex',flexDirection:'row'}}>
                            <Typography variant="body2" color={green[500]} mr={1} >
                                {feature.discount}
                            </Typography>
                            <Typography color={grey[500]} variant="body2">
                                {feature.timing}
                            </Typography>
                        </CardContent>
                    </Card>                    
                ))}
            </Grid>
        </Container>
    );
}
 
export default Features;