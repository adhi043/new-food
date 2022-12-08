
import { Link } from "react-router-dom";
import "../styles/bookings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

import React, { useEffect } from 'react'

// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'


  



const ViewReport= () => {
  // const sale = useSelector(state => state.values)
  // const dispatch = useDispatch()
  const [sale,setSale] = useState([])

  console.log(sale);



  const pathname = window.location.pathname
  const path = pathname.slice(pathname.indexOf('/',1)+1,pathname.length)
  console.log(path);


  useEffect(() => {

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
    params.append('sale_uid',path)

    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    // dispatch(fetchRequest)

    axios.post('https://api.pos.cab5.pk/fetch_sale_product.php', params, config).then((res) => {

      const sale = res.data.data.sale_products
          setSale(sale)
      // dispatch(fetchSuccess(sale))

    }

    )

  }, [])


  return (
    <>
     <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content">
        <div className="bookings mb-5">
       <div className="booking__wrapper p-5">
       <h2 className="booking__title">View Report</h2>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">id_</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Bill</th>
    </tr>
  </thead>
  {sale.map((i,index)=>{
return(
  <tbody>
    <tr>
      <th scope="row">{index}</th>
      <td>{i.product_name}</td>
      <td>{i.product_price}</td>
      <td>{i.quantity}</td>
      <td>{i.bill}</td>
    </tr>
  
  </tbody>
  )})}


</table>
       </div>
    </div>

        </div>
        </div>
        </div>
    
    
    </>
  );
};

export default ViewReport;
