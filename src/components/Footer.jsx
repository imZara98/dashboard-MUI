import { Grid, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";
import CopyrightSharpIcon from '@mui/icons-material/CopyrightSharp';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { grey } from "@mui/material/colors";

const Footer = () =>{
    return(
        <Container>
            <Grid item container sm={12} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                <Grid>
                    <Typography color={grey[600]} marginTop={2} variant="body2">
                        <CopyrightSharpIcon fontSize="small"/>
                        {"2022, made with"}
                        <FavoriteRoundedIcon fontSize="small" />
                        {"by,"}
                        <Link href="#" style={{ color:grey[700],textDecoration:'none', margin:'0 0.5rem' }}>Creative Tim</Link>
                        {"for a better web."}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography marginTop={3} variant="body2" sx={{display:'flex', flexDirection:'row'}}>
                        <Link href="https://creative-tim.com" style={{margin:'0 1rem', textDecoration:'none',color:grey[600]}}> Creative Tim</Link>
                        <Link href="https://creative-tim.com/presentation" style={{margin:'0 1rem',textDecoration:'none',color:grey[600]}}>About Us</Link>
                        <Link href="https://creative-tim.com/blog" style={{margin:'0 1rem',textDecoration:'none',color:grey[600]}}>Blog</Link>
                        <Link href="https://creative-tim.com/license" style={{margin:'0 1rem',textDecoration:'none',color:grey[600]}}>License</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Footer;