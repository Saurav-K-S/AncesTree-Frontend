import ForgotPassword from "./pages/login-signup/ForgotPswd";
import Login from "./pages/login-signup/login/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/login-signup/signup/SignUp";
import BasePage from "./pages/basepage/BasePage";
import OTP from "./pages/login-signup/signup/OTP";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<BasePage/>} />   
        <Route path="/registerotp" element={<OTP/>} />   
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
      </Routes>
    </Router>

  )
}

export default App
