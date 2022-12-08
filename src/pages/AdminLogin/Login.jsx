import React,{useState} from "react";
import "../../styles/settings.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();
  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');

  const Routing = () =>{
    if(user==='admin' && password === 'admin' ){
        Navigate('/dashboard');
    }else{
      Navigate('/');
    }
  }
  return (
    <div className="settings login_page">
      <div className="row">
        <div className="col-md-5 mx-auto">
        <div className="settings__wrapper rounded p-4">
        
        <h2 className="settings__title">Dashboard login</h2>


        <div className="details__form ">
          
          <form>
            <div className="row">
              <div className="col-md-12">
              <div className="form__group">
             
                <label>Email</label>
                <input type="text"
                value={user}
                 onChange={(e)=>setUser(e.target.value)}
                className="form-control py-3 text-white"  placeholder="Enter Your Email...." />
          
            </div>
            
              </div>
              <div className="col-md-12">
              <div className="form__group">
             
                <label>Password</label>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                className="form-control py-3 text-white" placeholder="Enter Your Password..." />
           
            </div>
            </div>
            <div className="col-md-12 mb-2">
              <button onClick={Routing}  className="btn  py-3  login_btn w-100">Login</button>
            </div>
            </div>
            
           

          

            

            
          </form>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
