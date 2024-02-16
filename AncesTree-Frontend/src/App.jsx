
import Login from "./pages/login-signup/login/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/login-signup/signup/SignUp";
import BasePage from "./pages/basepage/BasePage";
import OTP from "./pages/login-signup/signup/OTP";
import ForgotPassword from "./pages/login-signup/forgotpassword/ForgotPassword";
import ChangePassword from "./pages/login-signup/forgotpassword/ChangePassword";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
        <Route path="/" element={<BasePage/>} />   
        <Route path="/registerotp" element={<OTP/>} />   
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>

  )
}

export default App
