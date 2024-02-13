import React, {useState, useRef} from "react";
import { Link, useNavigate  } from 'react-router-dom'; 
import Heading from "../../../components/Heading";
import TextField from "../../../components/TextField";
import SubmitButton from "../../../components/SubmitButton";
import axios from "axios";
import Alert from "../../../components/Alert";


var psswdcheck = false;
export default function Login(){

  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const passwordInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function Submit() {
      
      axios.post('https://ancestree-backend.onrender.com/api/v1/user/login', {
        mobileNumber:phonenumber,
        password:password
      })
      .then(function (response) {
        if (response.data.success) {
          navigate("/");
        }
        else{
          setAlertMsg(response.data.msg);
          setShowAlert(true);
          
        }
      })
      .catch(function (error) {
        setAlertMsg(error.response.data.msg);
        setShowAlert(true);
        passwordInputRef.current.value = "";
        phoneInputRef.current.value = "";
      });
   
  }
  const closeAlert = () => {
    setShowAlert(false);
  };
  
  
  return(
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[410px] h-[550px]">
              
        <Heading head="Login" />
        
        <TextField head="Phone number" type="email" func={setPhonenumber} inputRef={phoneInputRef}/>
        <TextField head="Password" type="password" func={setPassword} inputRef={passwordInputRef}/>
      

        <div className=" flex justify-end text-[13px] mt-[5px] text-[#6A6A6A] font-IBM-Plex-Mono" >
            <Link to="/forgotpassword">Forgot password</Link>
        </div>

        <SubmitButton action="Login" func={Submit}/>
        
        {showAlert && (<Alert alertMsg={alertMsg} closeAlert={closeAlert}/>)}
      
      </div>
    </div>
  )
}