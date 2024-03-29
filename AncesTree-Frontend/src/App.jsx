
import Login from "./pages/login-signup/login/Login"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./pages/login-signup/signup/SignUp";
import BasePage from "./pages/basepage/BasePage";
import ForgotPassword from "./pages/login-signup/forgotpassword/ForgotPassword";
import FamilyJoinCreation from "./pages/family-jojn-creation/FamilyJoinCreation";
import Onboarding from "./onboarding/pages/Onboarding";
import TEST from "./test";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<BasePage/>} />   
        <Route path="/familyjoincreation" element={<FamilyJoinCreation/>} />   
        <Route path="/basepage" element={<BasePage/>} />   
        <Route path="/onboarding" element={<Onboarding/>} />   
        <Route path="/test" element={<TEST/>} />   
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>

  )
}

export default App
