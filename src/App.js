import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import PasswordReset from "./components/PasswordReset";
// import Signup from "./components/Signup";
// import SignupForm from "./components/SignupForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetPassword" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
