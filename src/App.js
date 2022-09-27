import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
// import Signup from "./components/Signup";
// import SignupForm from "./components/SignupForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
