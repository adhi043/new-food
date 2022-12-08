
import { Link } from "react-router-dom";
import "../styles/bookings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

import React, { useEffect } from 'react'

// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'


  



const StockIn= () => {
  // const stock_ins = useSelector(state => state.values)
  // const dispatch = useDispatch()
  const [stock_ins, setstockIn] = useState([])


  useEffect(() => {

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');

    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    // dispatch(fetchRequest)

    axios.post('https://api.pos.cab5.pk/fetch_stock_in.php', params, config).then((res) => {

      const stock_ins = res.data.data.stock_ins
      setstockIn(stock_ins);

      // dispatch(fetchSuccess(stock_ins))
      

    }

    )

  }, [])


  return (
    <>
     <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content"  style={{marginLeft: '128px'}} >
        <div className="bookings mb-5">
       <div className="booking__wrapper p-5">
       <h2 className="booking__title">Stock In</h2>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">id_</th>
      <th scope="col">Material Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity(Gram)</th>
      <th scope="col">Unit</th>
    </tr>
  </thead>
  {stock_ins.map((i,index)=>{
                  return(
  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{i.material_name}</td>
      <td>{i.price}</td>
      <td>{i.quantity}</td>
      <td>{i.unit}</td>
    </tr>
  
  </tbody>
  )})}


</table>
       </div>
    </div>
    <div>
        <div  className="add_products mt-5">
         <Link to='/add-stock'>
         <i class="ri-add-line"></i>
         </Link>

        </div>
    </div>
        </div>
        </div>
        </div>
    
    
    </>
  );
};

export default StockIn;
