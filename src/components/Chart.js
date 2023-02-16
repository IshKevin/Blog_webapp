import React from 'react'
import './Chart.css'

const Chart = () => {
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
       <div>
        Chart
        </div>   
        </div>

    </div>
    <div className="card-layout__item">
        <h2>4,868</h2>
        <h5>View Through</h5>
        <p> Estimated daily unique 
            views per visitor on the posts.</p>
    </div>
    <div class="card-layout__item">
        <h2>8,785</h2>
        <h5>Total Conversions</h5>
        <p> Estimated total conversions on 
            post per impressions.</p>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Chart