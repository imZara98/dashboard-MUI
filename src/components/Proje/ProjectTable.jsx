import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import adobe from '../../assets/Pictures/adobe.png';
import spotify from '../../assets/Pictures/spotify.png';
import photoshop from '../../assets/Pictures/photoshop.png';
import linkedin from '../../assets/Pictures/linkedin.png';
import colorful from '../../assets/Pictures/colorful.png';
import photo from '../../assets/Pictures/photo.png';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import boy from '../../assets/Pictures/2.png';
import young from '../../assets/Pictures/young.png';
import girl from '../../assets/Pictures/girl.png';
import one from '../../assets/Pictures/1.png';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    width: 120,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
const datas =[
  {
    companies:{
      name:"Material UI XD Version",
      icon:<Avatar alt="logo of XD" src={adobe} sx={{width:'30px',height:'30px',marginRight:'0.3rem'}}/>
    },
    members:
      <AvatarGroup align="left">
        <Avatar alt="Remy Sharp" src={young} sx={{width:'1.5rem',height:'1.5rem'}}/>
        <Avatar alt="Travis Howard" src={girl} sx={{width:'1.5rem',height:'1.5rem'}}/>
        <Avatar alt="Cindy Baker" src={boy} sx={{width:'1.5rem',height:'1.5rem'}}/>
      </AvatarGroup>
    ,
    budget:"$14,000",
    completion:
    <Box >
      <BorderLinearProgress variant="determinate" value={60} />
    </Box>,
    id :1,
  },
  {
    companies:{
      name:"Add Progress Track",
      icon: <Avatar alt="logo of spotify" src={spotify} sx={{width:'30px',height:'30px',marginRight:'0.3rem'}}/>,
    },
    members:
      <AvatarGroup align="left">
        <Avatar alt="Remy Sharp" src={young} sx={{width:'1.5rem',height:'1.5rem'}}/>
        <Avatar alt="Travis Howard" src={girl} sx={{width:'1.5rem',height:'1.5rem'}}/>
      </AvatarGroup>
    ,
    budget:"$3,000",
    completion:
    <Box >
      <BorderLinearProgress variant="determinate" value={30} />
    </Box>, 
    id:2,
  },
  {
    companies:{
      name:"Fix Platform Errors",
      icon: <Avatar alt="logo of company" src={colorful} sx={{width:'30px',height:'30px',marginRight:'0.3rem'}}/>,
    },
    members:
      <AvatarGroup align="left">
        <Avatar alt="Remy Sharp" src={young} sx={{width:'1.5rem',height:'1.5rem'}}/>
      </AvatarGroup>
    ,
    budget:"Not set",
    completion:
    <Box >
      <BorderLinearProgress variant="determinate" value={70} />
    </Box>, 
    id:3,
  },
  {
    companies:{
      name:"Launch our Mobile App",
      icon: <Avatar alt="logo of PS" src={photoshop} sx={{width:'30px',height:'30px',marginRight:'0.3rem'}}/>,
    },
    members:
    <AvatarGroup align="left">
      <Avatar alt="Remy Sharp" src={young} sx={{width:'1.5rem',height:'1.5rem'}}/>
      <Avatar alt="Travis Howard" src={girl} sx={{width:'1.5rem',height:'1.5rem'}}/>
      <Avatar alt="Cindy Baker" src={boy} sx={{width:'1.5rem',height:'1.5rem'}}/>
      <Avatar alt="Cindy Baker" src={one} sx={{width:'1.5rem',height:'1.5rem'}}/>
    </AvatarGroup>
    ,
    budget:"$20,500",
    completion:
    <Box >
      <BorderLinearProgress variant="determinate" value={100} />
    </Box>, 
    id:4,
  },
  {
    companies:{
      name:"Add the New Pricing Page",
      icon: <Avatar alt="logo of companyx" src={photo} sx={{width:'30px',height:'30px',marginRight:'0.3rem'}}/>,
    },
    members:
    <AvatarGroup align="left">
      <Avatar alt="Remy Sharp" src={young} sx={{width:'1.5rem',height:'1.5rem'}}/>
      <Avatar alt="Cindy Baker" src={boy} sx={{width:'1.5rem',height:'1.5rem'}}/>
      <Avatar alt="Cindy Baker" src={one} sx={{width:'1.5rem',height:'1.5rem'}}/>
    </AvatarGroup>
    ,
    budget:"$500",
    completion:
    <Box >
      <BorderLinearProgress variant="determinate" value={10} />
    </Box>, 
    id:5,
  },
  {
    companies:{
      name:"Redesign New Online Shop",
      icon:<Avatar alt="logo of linkedin" src={linkedin} sx={{width:'30px',height:'30px',marginRight:'0.3rem'}}/>, 
    },
    members:
    <AvatarGroup align="left">
      <Avatar alt="Remy Sharp" src={young} sx={{width:'1.5rem',height:'1.5rem'}}/>
      <Avatar alt="Cindy Baker" src={one} sx={{width:'1.5rem',height:'1.5rem'}}/>
    </AvatarGroup>
    ,
    budget:"$2,000",
    completion:
    <Box >
      <BorderLinearProgress variant="determinate" value={54} />
    </Box>, 
    id:6,
  },
]

export default function ProjectTable() {
  return (
    <TableContainer component={Paper} sx={{boxShadow:'none'}}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{fontSize:'0.6rem',color:grey[500]}}>COMPANIES</TableCell>
            <TableCell align="center"  sx={{fontSize:'0.6rem',color:grey[500]}}>MEMBERS</TableCell>
            <TableCell align="left" sx={{fontSize:'0.6rem',color:grey[500]}}>BUDGET</TableCell>
            <TableCell align="left" sx={{fontSize:'0.6rem',color:grey[500]}}>COMPLETION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((datas) => (
            <TableRow
              key={datas.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                {datas.companies.icon}
                <Typography variant='subtitle2'>{datas.companies.name}</Typography>
              </TableCell>
              <TableCell align="center">
                {datas.members}
              </TableCell>
              <TableCell align="left">
                  <Typography variant='subtitle2'>{datas.budget}</Typography>
              </TableCell>
              <TableCell align="right">
                  {datas.completion}
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}