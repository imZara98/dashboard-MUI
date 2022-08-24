import './Chart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    series:[{
        name:'Mobile Apps',
        data: [50,40,300,220,500,250,400,230,500],
        color: 'white',
        borderRadius:'20px'
    }],
    
    title:{text:''},
    xAxis :{
        categories : ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    },
    yAxis:{
        title:{
            text:' '
        }
    },
    chart:{
        height:'200px',
        backgroundColor: '#1a1c1b',
        borderRadius:'10px',
  
    },
};

const MobileApp = () => {
    return ( 
        <div className="hichart mobileApp">
            <HighchartsReact highcharts = {Highcharts} options ={options} />
        </div>
     );
}
 
export default MobileApp;