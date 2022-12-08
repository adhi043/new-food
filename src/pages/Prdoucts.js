import React from "react";
import { Link } from "react-router-dom";
import "../styles/bookings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

const Products= () => {
  return (
    <>
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content"  style={{marginLeft: '128px'}} >
        <div className="bookings mb-5">
       <div className="booking__wrapper p-5">
       <h2 className="booking__title">Products</h2>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">id_</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Materials</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Onino</td>
      <td>200 $</td>
      <td>abc</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Aloo</td>
      <td>100 $</td>
      <td>fat</td>
    </tr>
  
  </tbody>
</table>
       </div>
    </div>
    <div>
        <div  className="add_products mt-5">
         <Link to='/add-products'>
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

export default Products;
