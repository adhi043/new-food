
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

import React, { useEffect } from 'react'
// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';
import axios from "axios"
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'




const Dashboard = () => {





  // const meta = useSelector(state => state.values)
  // const dispatch = useDispatch()
  const [meta,setMeta] = useState([])


  useEffect(() => {

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');

    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    // dispatch(fetchRequest)

    axios.post('https://api.pos.cab5.pk/fetch_dashboard_meta.php', params, config).then((res) => {

      const meta = res.data.data.meta
      console.log('asadsadsa',meta.sale);
      setMeta(meta)

      // dispatch(fetchSuccess(meta))

    }

    )

  }, [])






  const carObj = {
    title: "Total Sales",
    totalNumber: meta.sale,
    icon: "ri-scales-fill",
  };
  
  const tripObj = {
    title: "Total Products",
    totalNumber: meta.total_products,
    icon: "ri-function-fill",
  };
  
  const clientObj = {
    title: "Total Materials",
    totalNumber: meta.total_materials,
    icon: "ri-calculator-line",
  };




  return (
    <div className="layout">
     <div>
     <Sidebar />
     </div>
      <div className="main__layout">
        <TopNav />

        <div className="content"  style={{marginLeft: '128px'}} >
        <div className="dashboard" >
      <div className="dashboard__wrapper">
        

        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
         
        </div>


        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Food Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        {/* <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div> */}
      </div>
    </div>
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;
