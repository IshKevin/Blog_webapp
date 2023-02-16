import React from 'react'
import './Chart.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { AreaChart, Area } from 'recharts';


const Chart = () => {

  const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
 
];
  return (
    <div className='Chart'>
    <div className='dash-home-title'> WELCOME TO DASHBOARD</div>


    <div className='dash-home-sect1'> 
    <div className="card-layout">
    <div className="card-layout__item">
        <div className="card-inside">
        <div>
        <h2>4,608</h2>
        <h5>Click Through</h5>
        <p className='card-exp'> No. of clicks to<br/> 
        post that consist of<br/> 
         a single impression.</p>
       </div>
       <div className="chart-bar">
           <BarChart className="chart-bar" width={200} height={110} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
        </div>   
        </div>

    </div>
    <div className="card-layout__item">
        <div className="card-inside">
        <div>
        <h2>4,868</h2>
        <h5>View Through</h5>
        <p className='card-exp'> Estimated daily unique <br/> 
            views per visitor <br/>
            on the posts.</p>
            </div>
       <div className="chart-bar">
           <BarChart className="chart-bar" width={200} height={110} data={data}>
          <Bar dataKey="pv" fill="#8884d8" overflow={'hidden'} />
        </BarChart>
        </div>   
        </div>    
    </div>
    <div class="card-layout__item">
        <div className="card-inside">
        <div> 
        <h2>8,785</h2>
        <h5>Total Conversions</h5>
        <p className='card-exp'>Estimated total<br/> 
        conversions on<br/> 
          post per impressions.</p>
            </div>
       <div className="chart-bar">
           <BarChart className="chart-bar" width={200} height={110} data={data}>
          <Bar dataKey="pv" fill="#8884d8" overflow={'hidden'} />
        </BarChart>
        </div>   
        </div>      
    </div>
    </div>
    </div>

    <div className='dash-home-sect2'>
        <div>
        <h2 className=''>Organic Visits & Conversions</h2>
        <AreaChart
          className="chart-bar" 
          width={600}
          height={300}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          
          <XAxis  dataKey="name" />
          <YAxis  />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        </div>
       <div>
       <h2 className=''> Analytics Performance</h2>
        </div>
      </div> 


    </div>
  )
}

export default Chart