import './Chart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options = {
    series:[{
        name:'Mobile Apps',
        data: [50,40,300,320,500,350,200,230,500],
        color: 'white',
               
    }],
    
    title:{text:''},
    xAxis :{
        categories : ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    },
    yAxis:{
        title:{
            text:''
        }
    },
    chart:{
        height:'200px',
        backgroundColor: '#32a852',
        borderRadius:'10px',
        marginTop: 25,
    },
};
const MobileChart = () => {
    return ( 
        <div className="hichart mobileChart">
            <HighchartsReact highcharts = {Highcharts} options ={options} />
        </div>
    );
}
 
export default MobileChart;