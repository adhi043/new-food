
import { Link } from "react-router-dom";
import "../styles/bookings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import { useNavigate } from 'react-router-dom'
import React, { useEffect,useState } from 'react'

// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
// import { useSelector, useDispatch } from 'react-redux'


  



const Profit= () => {
    const navigate=useNavigate()
  // const sale = useSelector(state => state.values)
  // const dispatch = useDispatch()
const [sale,setSale] = useState([])
  console.log(sale);
  const [query, setQuery] = useState('')


  useEffect(() => {

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');

    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    // dispatch(fetchRequest)

    axios.post('https://api.pos.cab5.pk/fetch_profit_loss.php', params, config).then((res) => {

      const sale = res.data.data.materials
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

        <div className="content"  style={{marginLeft: '128px'}} >
        <div className="bookings mb-5">
       <div className="booking__wrapper p-5">
       <h2 className="booking__title">Reports</h2>
        <div className="">
          <ul className="d-flex p-0 gx-5">
            <li>
              <Link  className="float-end btn_sve border-0 py-1 text-white rounded "  to="/reports">Sales Report</Link>
            </li>
            <li className="ps-3">
              <Link  className="float-end btn_sve border-0 py-1 text-white rounded "  to="/profit">Profit/Loss</Link>
            </li>
          </ul>
        </div>
         
       <input type="search" placeholder="search..." className="tables_serach rounded" onChange={e => setQuery(e.target.value)} />

       <table class="table">
  <thead>
    <tr>
      <th scope="col">id_</th>
      <th scope="col">Name</th>
      <th scope="col">Remaining Quantity</th>
      <th scope="col">Consume Quantity</th>
    </tr>
  </thead>
  {sale.filter(i => {
                      if (query === '') {
                        return i
                      }
                      else if (i.total_bill.toLowerCase().includes(query.toLocaleLowerCase())) {
                        return i
                      }
                    }).map((i,index)=>{
return(
  <tbody>
    <tr >
      <th scope="row">{index}</th>
      <td>{i.name}</td>
      <td>{i.remaining_quantity}</td>
      <td>{i.consume_quantity}</td>
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

export default Profit;
