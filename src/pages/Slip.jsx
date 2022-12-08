
import React, { useEffect,useMemo } from 'react'

import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Slip = () => {
  const navigate=useNavigate()

    
   const [sales,setSale] = useState([])
   const [prod,setProd] = useState([])

    function printSlip() {
        document.getElementById('slip').innerHTML='Thanks for visiting us!'
        window.print()
        document.getElementById('slip').setAttribute('disabled','true')
        
        
    }


    

  console.log(sales);



  


  



  const path=localStorage.getItem('slip_uid')




  const GetSlip=async()=>{

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
    params.append('sale_uid',path)

    const config = {

      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }

    }

    // dispatch(fetchRequest)

    await axios.post('https://api.pos.cab5.pk/fetch_bill_transcript.php', params, config).then((res) => {
    localStorage.setItem('bill',res.data.data.sale[0].bill);
    console.log(res.data.data);
        
      const sale =  res.data.data.sale
      const prod1 = res.data.data.products
      setSale(sale)
      setProd('');
      setProd(prod1);
      console.log(prod1)
      console.log(prod);

      // dispatch(fetchSuccess(sale))
      // dispatch(fetchSuccess(prod))
      

    }

    )

  }



  useEffect(() => {

    GetSlip()   

  }, [GetSlip])




const bills = localStorage.getItem("bill");















  return (
    <div className=' slipss  rounded  py-1'  style={{background:'white',overflow:'hidden'}}>
        <div className='float-left'>
           <Link to="/bookings" className=''onClick={()=>{
            setProd(0);
            setSale(0);
      
           }} ><button className='btn_sve  border-0 py-1 text-dark rounded text-white'>  Go Back</button></Link> 
        </div>
       <div className="row">
        <div className="col-md-10  m-0 p-0 tre  text-center mx-auto col-sm-12">
        <div className='border  p-0 border-0 p-1'>
            <div className='text-center'>
                <img src={require('../assets/images/posimg.jpeg')} alt="logo"  className='img-fluid  slips_img'  style={{width:'20px'}} />
            </div>
            <div className='m-2 text-dark  tre  text-center' style={{fontWeight:'bold'}} >
                <p className='m-0' style={{fontSize:"10px"}} >Shop no 61, Azam Market, SGD</p>
                <p className='m-0' style={{fontSize:"10px"}}  >+92300-1029329</p>

            </div>
            

            <div>
                <label style={{fontWeight:'bold'}} className='text-dark pt-1  times float-end'>{`Date: ${new Date().toUTCString()}`}</label>
            </div>

            <div className=' tables_ss  pt-2' >
                <table className=' w-100 text-dark text-center'  >
                    <thead className='second-bills' style={{borderBottom:'1px solid black'}}>
                    <th className='border-0 add_items '   style={{fontSize:"10px"}}  >Items</th>
                        <th className='border-0 add_items'  style={{fontSize:"10px"}}  >Quantity</th>
                        <th className='border-0 add_items'  style={{fontSize:"10px"}} >Price</th>
                    </thead>
                    
                    <tbody>
                    
                    {prod.map((i,index)=>{
                  return(
                        <tr className='  '>
                            <td >{i.name}</td>
                            <td >{i.quantity}</td>
                            <td  >{i.bill}</td>
                        </tr>
                        )})}
                    </tbody>
                </table>
                
                

                
            </div>

            <div style={{borderTop:'1px solid black'}}>
                <h6 className='text-dark float-end total_bills'>{`Total Bill: ${bills}/Rs-`}</h6>
            </div>

            <div>
            <div className='  text-dark  tre text-center' style={{fontWeight:'bold'}} >
              
                <p className='m-0 text-center'  style={{fontSize:"10px"}}  >Thank you for visiting us.</p>
                <p className='m-0' style={{fontSize:"10px"}} >Software By: LightHouse Development</p>
                <p className='m-0' style={{fontSize:"10px"}} >+92-300-7972196</p>
                
              


            </div>
            </div>


            <div>
                <button className=' text-white float-end btn_sve border-0 py-1 text-dark rounded ' id='slip' onClick={printSlip}>Print</button>
            </div>


        </div>
        </div>
       </div>
    </div>
  )
}

export default Slip