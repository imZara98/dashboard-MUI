import * as React from 'react';
import { Grid,Card, CardHeader, CardContent, Typography, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import { grey,lightBlue } from "@mui/material/colors";
import ProjectTable from "./ProjectTable";
import MoreIcon from '@mui/icons-material/MoreVert';

const Project = () => {
    return (
        <Container>
            <Grid container item columns={1} md={6}>
                <Card sx={{borderRadius:'0.7rem'}} elevation={3}>
                    <CardHeader 
                        title={<Typography variant='h6' sx={{color:'#1a237e'}}>Project</Typography>}
                        subheader={       
                            <Typography  variant='body2' sx={{dispaly:'flex',flexDirection:'row', color:grey[600]}}>
                                <IconButton>
                                    <CheckIcon fontSize="small"  sx={{color:lightBlue[500], marginBottom:'0.5rem'}} />
                                </IconButton>
                                <strong>30 Done</strong> this month
                            </Typography>
                        }
                        action = {
                          <IconButton
                            size="large"
                            aria-label="display more actions"
                            edge="end"
                          >
                            <MoreIcon /> 
                          </IconButton>
                        }
                    />
                    <CardContent>
                        <ProjectTable/>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
}
 
export default Project;