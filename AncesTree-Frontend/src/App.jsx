import ForgotPassword from "./pages/login-signup/ForgotPswd";
import Login from "./pages/login-signup/login/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/login-signup/signup/SignUp";
import SignUpNumber from "./pages/login-signup/signup/SignUpNumber";
import HomePage from "./pages/homepage/HomePage";
import TreePage from "./pages/treepage/TreePage";
import BasePage from "./pages/basepage/BasePage";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/basepage" element={<BasePage/>} /> 
        <Route path="/homepage" element={<HomePage/>} /> 
        <Route path="/treepage" element={<TreePage/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signupnumber" element={<SignUpNumber/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
      </Routes>
    </Router>

  )
}

export default App
