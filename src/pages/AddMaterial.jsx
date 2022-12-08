
import "../styles/settings.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopNav from "../components/TopNav/TopNav";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"



const AddMaterial = () => {


  const navigate=useNavigate();


  const [addMaterial, setAddMaterial] = useState({
    name:'',
    quantity:'',
    unit:'',
    price:'',

  })





  const handle=(e)=>{
    const newMaterial={...addMaterial}
    newMaterial[e.target.id]=e.target.value
    setAddMaterial(newMaterial)
    console.log(newMaterial);
  }




  





  const params = new FormData();

    params.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
    params.append('name',addMaterial.name)
    params.append('quantity',addMaterial.quantity)
    params.append('unit',addMaterial.unit)
    params.append('price',addMaterial.price)



    const config = {

      headers: {

        "Content-Type": "application/x-www-form-urlencoded"

      }

    }






    const submit=(e)=>{
      e.preventDefault();


      if(document.getElementById('name').value.length===0){
        alert('Empty name')
      }else if(document.getElementById('quantity').value.length===0){
        alert('Empty quantity')
      }

    axios.post('https://api.pos.cab5.pk/create_material.php', params, config).then((res) => {
      if(res.data.state==='OK'){
        navigate('/materials')
      }

    }

    )}



    
    





  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <TopNav />

        <div className="content"  style={{marginLeft: '128px'}} >
        <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Add Materials</h2>


        <div className="details__form">
          
          <form>
            <div className="form__group">
              <div>
                <label>Name</label>
                <input type="text" id='name' placeholder="Enter Material Name.." onChange={(e)=>handle(e)} value={addMaterial.name}/>
              </div>

              <div>
                <label>Quantity</label>
                <input type="text" id='quantity' placeholder="Enter Quantity...." onChange={(e)=>handle(e)} value={addMaterial.quantity}/>
              </div>


              <div className="pt-3">
                <label htmlFor='unit'>Unit</label>
                <select id="unit" onChange={(e)=>handle(e)}>
                <option >Select Unit</option>
                  <option value="gram">Gram</option>
                </select>
              </div>



              <div className="pt-3">
                <label>Price</label>
                <input type="text" id="price" placeholder="Enter Material Price..." onChange={(e)=>handle(e)} value={addMaterial.price} required/>
              </div>

              <div>
                
                <button type="submit" className="w-50  login_btn border-0 rounded mt-5 py-3" placeholder="SYL 3108" onClick={submit}>Add Material</button>
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

export default AddMaterial;
