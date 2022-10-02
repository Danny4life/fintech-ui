
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import PasswordReset from "./components/PasswordReset";
import PasswordResetEmailVerification from "./components/PasswordResetEmailVerification";
import ResetPasswordPage from "./components/ResetPasswordPage";
import VerifyEmail from "./components/VerifyEmail";
// import Signup from "./components/Signup";
// import SignupForm from "./components/SignupForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetPassword" element={<PasswordReset />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="passwordReset" element={<PasswordResetEmailVerification />} />
        <Route path="resetPassword" element={<ResetPasswordPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
