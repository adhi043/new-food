
import "../styles/bookings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';

import axios from "axios"
// import { useSelector, useDispatch } from 'react-redux'

const Bookings = () => {
  const navigate=useNavigate()


  const [getuid, setgetuid] = useState('')
  console.log('overall uid', getuid)

  const [gettableuid, setgettableuid] = useState('')
  console.log('table uid', gettableuid)

  const [getname, setgetname] = useState('')
  console.log(getname)

  const [getprice, setgetprice] = useState('')
  console.log(getprice)


  const [quantity, setQuantity] = useState([])
  console.log(quantity);

  const [dish, setDish] = useState([])
  console.log(dish);


  const [products,setProducts] = useState([])



  const handleRemoveItem = (uid) => {
     setDish(dish.filter(item => item.uid !== uid));
   };



   console.log('New Dish',dish);











  const submit = async(e) => {
    e.preventDefault();

    const param = new FormData();
    param.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
    param.append('sale_date', new Date())
    param.append('total_bill', dish.reduce((total, currentValue) => total = total + currentValue.result,0))



    const configu = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    await axios.post('https://api.pos.cab5.pk/add_sale.php', param, configu).then((res) => {
      console.log(res.data);

      if (res.data.state === 'OK') {
        const sale_uid = res.data.data.sale.uid;

        dish.map(i => {
          const para = new FormData();
          para.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
          para.append('sale_uid', sale_uid)
          para.append('product_uid', i.uid)
          para.append('quantity', i.quantity)
          para.append('bill', i.result)
          const config = {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }



          axios.post('https://api.pos.cab5.pk/add_sale_product.php', para, config).then((res) => {
 
            if(res.data.state==='OK'){
             
              localStorage.setItem('slip_uid',sale_uid)
            }
          
          })
          
        })
        navigate(`/slip/${sale_uid}`)
        

      }

    }

    )
  }





  






    
  


  // const products = useSelector(state => state.values)
  // const dispatch = useDispatch()




  useEffect(() => {

    const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');

    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    // dispatch(fetchRequest)

    axios.post('https://api.pos.cab5.pk/fetch_products.php', params, config).then((res) => {

      const products = res.data.data.products
setProducts(products);
      // dispatch(fetchSuccess(products))

    }

    )

  }, [])


  




  const [newVal, setNewVal] = useState();
  console.log('saddsadas', newVal);



  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content"  style={{marginLeft: '128px'}} >
          <div className="bookings">
            <div className="booking__wrapper p-5">
              <h2 className="booking__title">Products</h2>

              <div className="filter__widget-wrapper">

              </div>

              <div className="booking__car-list">
                {products?.map((i) => (<>
                  <div className="car__item" onClick={() => {
                    setgetuid(i.uid)
                    setgetname(i.name)
                    setgetprice(parseInt(i.price))
                  }}>


                    <div className="car__img">
                      <img src={i.image} width='100%' className="rounded" height='200px' alt="" />
                    </div>

                    <div className="car__item-tile">
                      <h3>{i.name}</h3>

                    </div>

                    <div className="car__item-bottom flex justify-content-between">
                      <p className="car__rent">{i.price} Rs/-</p>
               

                    </div>
                    <div>

                    <input style={{Color:'white'}} type="text" placeholder="Enter Quantity" className="w-100 ps-2" size='3' id="quant" onChange={
                        (e) => {
                          const value = e.target.value;

                          setQuantity(values => ({
                            ...values, [i.uid]: (value)

                          }))


                          setNewVal(values => ({
                            ...values, [i.uid]: (quantity[i.uid] * getprice)
                          }))
                        }
                      } value={quantity[i.uid]} />
                    </div>
                      <button className="btn_sve mt-3 border-0 py-2 text-white rounded " onClick={()=>{
                        setDish(values => ([...values, { name: i.name, price: i.price, uid: i.uid, quantity:quantity[i.uid], result:quantity[i.uid]*i.price }]))}
                      }>Select</button>

                  </div>
                </>))}
              </div>
              <div className="pt-5 mt-2">
                <h1 className="text-white">Selected items</h1>
                <table className="table mt-3 text-white">
                  <thead>
                    <th>Dish Name</th>
                    <th>Price</th>
                    <th>Quantity(Gram)</th>
                    <th>Result</th>
                    <th> </th>
                  </thead>



                  <tbody>
                    {dish?.map((i, index) => (<>
                      <tr>
                        <td>{i.name}</td>
                        <td>{i.price}</td>
                        <td className="quantity">{i.quantity}</td>
                        <td id="tbid">{i.result}</td>
                        <td><button className="bg-dark border-0 p-2 py-0  text-white rounded " onClick={() =>handleRemoveItem(i.uid)}>X</button></td>
                      </tr>


                    </>))}
                  </tbody>



                </table>

                <div className="align-items-center">
                <div>
                <h4 className="text-white float-end">Total: {dish.reduce((total, currentValue) => total = total + currentValue.result,0)}</h4>

              </div>
              
              <button className="btn-primary btn_sve border-0 py-2 text-white rounded " id="load"
              onClick={submit}
              >
                Purchase
              </button>

                </div>
               
              
              </div>


              

            </div>
          </div>
        </div>
      </div>

    </div>


  );
};

export default Bookings;
