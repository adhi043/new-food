
import { Link } from "react-router-dom";
import "../styles/bookings.css";

import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";

import React, { useEffect } from 'react'

// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'

const Materials = () => {
  // const materials = useSelector(state => state.values)
  // const dispatch = useDispatch()

const [materials,setMaterials] = useState([])


  useEffect(() => {

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');

    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    // dispatch(fetchRequest)

    axios.post('https://api.pos.cab5.pk/fetch_materials.php', params, config).then((res) => {

      const materials = res.data.data.materials;

      // dispatch(fetchSuccess(materials))
          setMaterials(materials)
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
            <div>
              <div className="add_products mt-5">
                <Link to='/add-materials'>
                  <i class="ri-add-line"></i>
                </Link>

              </div>
            </div>
            <div className="bookings mb-5">
              <div className="booking__wrapper p-5">
                <h2 className="booking__title">Materials</h2>




                
                    <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">id_</th>
                      {/* <th scope="col">Image</th> */}
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity(Gram)</th>
                      <th scope="col">Unit</th>
                    </tr>
                  </thead>
                  {materials.map((i,index)=>{
                  return(
                  <tbody>
                    <tr>
                      <td scope="row">{index}</td>
                      {/* <td>  <img width='20px' className="table_img" src={require('../assets/images/profile-02.png')} />  </td> */}
                      <td className="d-flex">{i.name}</td>
                      <td>{i.price}</td>
                      <td>{i.quantity}</td>
                      <td>gram</td>
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

export default Materials;
