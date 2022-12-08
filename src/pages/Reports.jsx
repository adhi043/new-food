
import { Link } from "react-router-dom";
import "../styles/bookings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
// import { useSelector, useDispatch } from 'react-redux'






const Reports = () => {
  const NavLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'red' : 'blue'
    }
  }
  const navigate = useNavigate()
  // const sale = useSelector(state => state.values)
  // const dispatch = useDispatch()
  const [sale, setSale] = useState([])

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

    axios.post('https://api.pos.cab5.pk/fetch_sale.php', params, config).then((res) => {

      const sale = res.data.data.sale
      setSale(sale)

      // dispatch(fetchSuccess(sale))

    }

    )
  }, [])


  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="main__layout"  >
          <TopNav />

          <div className="content"  style={{marginLeft: '128px'}} >
            <div className="bookings mb-5">
              <div className="booking__wrapper p-5">
                <h2 className="booking__title">Reports</h2>
                <div className="">
                  <ul className="d-flex align-items-center p-0 gx-5">
                    <li>
                      <Link className="float-end btn_sve border-0 py-1 text-white rounded " to="/reports">Sales Report</Link>
                    </li>
                    <li className="p-3">
                      <Link className="float-end btn_sve border-0 py-1 text-white rounded " to="/profit">Profit/Loss</Link>
                    </li>
                  </ul>
                </div>

                <input type="search" placeholder="search..." className="tables_serach rounded" onChange={e => setQuery(e.target.value)} />

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">id_</th>
                      <th scope="col">Total Bill</th>
                      <th scope="col">Created at</th>
                    </tr>
                  </thead>
                  {sale.filter(i => {
                    if (query === '') {
                      return i
                    }
                    else if (i.total_bill.toLowerCase().includes(query.toLocaleLowerCase())) {
                      return i
                    }
                    else if (i.created_at.includes(query)) {
                      return i
                    }
                  }).map((i, index) => {
                    return (
                      <tbody>
                        <tr >
                          <th scope="row">{index}</th>
                          <td>{i.total_bill}</td>
                          <td>{i.created_at}</td>
                          <td><button className="btn_sve border-0 py-2 text-white rounded " onClick={() => navigate(`/view-report/${i['uid']}`)}>View Detail</button></td>
                        </tr>

                      </tbody>
                    )
                  })}


                </table>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default Reports;
