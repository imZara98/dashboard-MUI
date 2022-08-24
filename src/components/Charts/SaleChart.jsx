import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Chart.css';

const options = {
    series:[{
        name:'Sales',
        data: [50,20,10,22,50,10,40],
        color: 'white',
        borderRadius:'3px',
    }],
    chart:{
        type:'column',
        backgroundColor: '#1387ed',
        borderRadius:'10px',
        height:'200px',
        marginTop: 25,
    },
    plotOptions: {
        series: {
            pointWidth: 5
        }
    },
    title:{
        text:null,
    },
    xAxis:{
        categories : ['M','T','W','T','F','S','S'],

    },
    yAxis:{
        title:{
            text:' '
        },
    },
   
};


const SaleChart= () => {
    return ( 
        <div className="hichart saleChart">
            <HighchartsReact highcharts = {Highcharts} options = {options} />
        </div>
    );
}
 


export default SaleChart;