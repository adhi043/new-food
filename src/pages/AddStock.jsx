
import "../styles/settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { fetchRequest, fetchSuccess, fetchError } from '../reducers/Action';
import axios from "axios"
// import { useSelector, useDispatch } from 'react-redux'



const AddStock = () => {


const [materials,setMaterials] = useState([])
  const navigate=useNavigate()



  // const materials = useSelector(state => state.values)
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
    axios.post('https://api.pos.cab5.pk/fetch_materials.php', params, config).then((res) => {
      const materials = res.data.data.materials
      // dispatch(fetchSuccess(materials))

      setMaterials(materials)
    }
    )
  }, [])










  const [stockIn, setstockIn] = useState({
    material_uid:'',
    quantity:'',
    unit:'',
    price:'',

  })







  const handle=(e)=>{
    const newStockIn={...stockIn}
    newStockIn[e.target.id]=e.target.value;
    setstockIn(newStockIn)
    console.log(newStockIn);
  }


    const submit=(e)=>{
      e.preventDefault();

      const param = new FormData();
  param.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
  param.append('material_uid',stockIn.material_uid)
  param.append('quantity',stockIn.quantity)
  param.append('unit',stockIn.unit)
  param.append('price',stockIn.price)



  const configu = {

    headers: {

      "Content-Type": "application/x-www-form-urlencoded"

    }

  }

    axios.post('https://api.pos.cab5.pk/add_stock_in.php', param, configu).then((res) => {
      console.log(res.data);
      if(res.data.state==='OK'){
        navigate('/stock-in')
      }

    }

    )}



  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content"  style={{marginLeft: '128px'}}>
        <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Add Stock</h2>


        <div className="details__form">
          
          <form>
            <div className="form__group">
              <div>
                <label>Material Name</label>
                <select id="material_uid" onChange={(e)=>handle(e)}>
                <option>Select</option>
                  {materials?.map(show=>
                  <option value={show['uid']}>{show['name']}</option>)}
                </select>
              </div>

              <div>
                <label>Price</label>
                <input type="text" placeholder="Enter Price" id='price' onChange={(e)=>handle(e)} value={stockIn.price}/>
              </div>

              <div className="pt-4">
                <label>Quantity</label>
                <input type="text" placeholder="Enter Quantity" id="quantity" onChange={(e)=>handle(e)} value={stockIn.quantity}/>
              </div>

              <div className="pt-4">
                <label for='unit'>Unit</label>
                <select id="unit" onChange={(e)=>handle(e)}>
                <option >Select Unit</option>
                  <option value="gram">Gram</option>
                </select>
              </div>
            </div>

            <div className="form__group">
              

              <div  className="form_group w-25 mt-4">
               
                <input type="submit" className="btn_sve"  value='Add Stock' onClick={submit} />
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

export default AddStock;
