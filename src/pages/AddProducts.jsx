
import "../styles/settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";





const AddProducts = () => {

  const navigate=useNavigate()

const [materials,setMaterial] = useState([])
  // const materials = useSelector(state => state.values)
  // const dispatch = useDispatch()

  const [query, setQuery] = useState('')

  const [getuid, setgetuid] = useState('')

  const [quantity, setQuantity] = useState([])

  const qua = JSON.stringify(quantity)

  console.log(quantity);

  console.log(getuid);
















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

      const materials = res.data.data.materials
      setMaterial(materials)

      // dispatch(fetchSuccess(materials))

    }

    )

  }, [])















  const [productIn, setproductIn] = useState({
    name: '',
    image: '',
    price: '',
    product_uid: '',
    material_uid: '',
    quantity: '',
    unit: '',
  })



  const [addImage, SetaddImage] = useState([])


  const onImagehandle = (e) => {
    const newImage = e.target.files
    SetaddImage(newImage[0])
    console.log(newImage);

  }







  const handle = (e) => {
    const newproductIn = { ...productIn }
    newproductIn[e.target.id] = e.target.value;
    setproductIn(newproductIn)
    console.log(newproductIn);
  }

  const submit = (e) => {
    e.preventDefault();

    const param = new FormData();
    param.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
    param.append('name', productIn.name)
    param.append('price', productIn.price)
    param.append('image', addImage)



    const configu = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }

    axios.post('https://api.pos.cab5.pk/add_product.php', param, configu).then((res) => {
      console.log(res.data);

      if (res.data.state === 'OK') {
        const product_uid = res.data.data.product.uid

        Object.keys(quantity).forEach(key => {
          console.log(key, quantity[key]);



          const para = new FormData();
          para.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
          para.append('product_uid', product_uid)
          para.append('material_uid', key)
          para.append('quantity', quantity[key])
          para.append('unit', 'gram')



          const config = {

            headers: {

              "Content-Type": "application/x-www-form-urlencoded"

            }

          }



          axios.post('https://api.pos.cab5.pk/add_product_materials.php', para, config).then((res) => {
            console.log(res.data)
            if(res.data.state==='OK'){
              navigate('/bookings')
            }
          
          })


        })

      }

    }

    )
  }


  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content" style={{marginLeft: '128px'}}>
          <div className="settings">
            <div className="settings__wrapper p-5">
              <h2 className="settings__title">Add Products</h2>


              <div className="details__form">

                <form>
                  <div className="form__group">
                    <div>
                      <label>Name</label>
                      <input type="text" placeholder="Enter Products Name..." id="name" onChange={(e) => handle(e)} />
                    </div>

                    <div>
                      <label>Price</label>
                      <input type="text" placeholder="Enter Price..." id="price" onChange={(e) => handle(e)} />
                    </div>
                  </div>

                  <div className="form__group">
                    <div>
                      <label>Image</label>
                      <input type="file" placeholder="example@gmail.com" id="image" onChange={e => onImagehandle(e)} />
                    </div>
                  </div>


                  <br />
                  <br />


                  <input type="search" placeholder="search materials..." className="tables_serach rounded" onChange={e => setQuery(e.target.value)} />
                  <table class="table  text-white"   >

                    <thead>
                      <tr>
                        <th scope="col">id_</th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Quantity(Gram)</th>
                        <th scope="col">Unit</th>
                      </tr>
                    </thead>
                    {materials.filter(i => {
                      if (query === '') {
                        return (
                          <tbody   >
                            <tr>
                              <td scope="row"><input type="checkbox" /></td>
                              {/* <td>  <img width='20px' className="table_img" src={require('../assets/images/profile-02.png')} />  </td> */}
                              <td className="d-flex">{i.name}</td>
                              <td><input type="text" size='3' value={quantity.getuid} /> </td>
                              <td>gram</td>
                            </tr>

                          </tbody>
                        )
                      }
                      else if (i.name.toLowerCase().includes(query.toLocaleLowerCase())) {
                        return (<tbody   >
                          <tr>
                              <td scope="row"><input type="checkbox" /></td>
                              
                              <td className="d-flex">{i.name}</td>
                              <td><input type="text" size='3' value={quantity.getuid} /> </td>
                              <td>gram</td>
                            </tr>

                        </tbody>)
                      }
                    }).map((i, index) => {
                      return (
                        <tbody   >
                          <tr onClick={() => { setgetuid(i.uid) }}>
                            <td scope="row"><input type="checkbox"/></td>
                            <td className="d-flex">{i.name}</td>
                            <td><input type="text" size='3' value={quantity ? quantity.getuid : quantity[getuid]} onChange={e => {
                              const value = e.target.value;
                              setQuantity(values => ({ ...values, [getuid]: value }))

                            }} /></td>
                            <td>gram</td>
                          </tr>

                        </tbody>
                      )
                    })}
                  </table>













                  <div className="form__group">
                    <div className="form_group w-25 mt-4">

                      <input type="submit" className="btn_sve" value='Add Products' onClick={submit} />
                    </div>
                  </div>




                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddProducts;
