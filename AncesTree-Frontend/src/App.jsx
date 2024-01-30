import ForgotPassword from "./login-signup/ForgotPswd";
import Login from "./login-signup/login/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./login-signup/signup/SignUp";
import SignUpNumber from "./login-signup/signup/SignUpNumber";
import HomePage from "./homepage/HomePage";



function App() {

  return (

    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage/>} /> 
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/signupnumber" element={<SignUpNumber/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
      </Routes>
    </Router>

  )
}

export default App
