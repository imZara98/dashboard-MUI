import WeekendIcon from '@mui/icons-material/Weekend';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { green,grey, lightBlue,pink } from "@mui/material/colors";

export const features=[
    {
        "icons": <WeekendIcon  sx={{backgroundColor:grey[900], padding:'1rem', borderRadius:'0.7rem', marginRight:'5rem',position:'relative',bottom:'1.2rem',right:'0.6rem', boxShadow:'0 10px 20px rgba(0,0,0,0.2)'}} />,
        "property" : "Booking",
        "count" : "340",
        "discount" : "+55%",
        "timing" : "than last week" ,
        "id":1,
        },
    {
        "icons": <LeaderboardIcon  sx={{backgroundColor:lightBlue[700], padding:'1rem', borderRadius:'0.7rem', marginRight:'3.5rem',position:'relative',bottom:'1.2rem',right:'0.6rem', boxShadow:'0 10px 20px rgba(0,0,0,0.2)'}} />,
        "property":"Today's User",
        "count" : "2,300",
        "discount" : "+3%",
        "timing" : "than last month",
        "id":2,
    },
    {
        "icons": <AddBusinessIcon sx={{backgroundColor:green[600], padding:'1rem', borderRadius:'0.7rem', marginRight:'5rem',position:'relative',bottom:'1.2rem',right:'0.6rem', boxShadow:'0 10px 20px rgba(0,0,0,0.2)'}} />,
        "property":"Revenue",
        "count" : "34k",
        "discount" : "+1%",
        "timing" : "than yesterday",
        "id":3,
    },
    {
        "icons": <PersonAddIcon sx={{backgroundColor:pink[500], padding:'1rem', borderRadius:'0.7rem', marginRight:'5rem',position:'relative',bottom:'1.2rem',right:'0.5rem', boxShadow:'0 10px 20px rgba(0,0,0,0.2)'}} />,
        "property": "Followers",
        "count" : "+91",
        "discount":"+8%", 
        "timing" : "Just updated",
        id:4,
    },
]
export const informations = [
    {
        "name":"Website Views",
        "use":"Last Campaign Performance",
        "update":"campaign sent 2 days ago",
        "id":5,
    },
    {
        "name":"Daily Sales",
        "disscount":"(+15%)",
        "use":"increase in today sales.",
        "update":"updated 4 min ago",
        "id":6,
    },
    {
        "name":"Completed Tasks",
        "use":"Last Campaign Performance",
        "update":"just update",
        "id":7,
    }
]