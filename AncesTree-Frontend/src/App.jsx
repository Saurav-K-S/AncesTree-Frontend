
import Login from "./pages/login-signup/login/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/login-signup/signup/SignUp";
import BasePage from "./pages/basepage/BasePage";
import ForgotPassword from "./pages/login-signup/forgotpassword/ForgotPassword";
import FamilyJoinCreation from "./pages/family-jojn-creation/FamilyJoinCreation";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<BasePage/>} />   
        <Route path="/familyjoincreation" element={<FamilyJoinCreation/>} />   
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>

  )
}

export default App
