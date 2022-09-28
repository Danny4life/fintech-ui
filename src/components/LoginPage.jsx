import Login from "./Login";
import Signup from "./Signup";

const LoginPage = () => {
    return ( 
        <div>
        <div className="flex m-0 p-0 justify-end">
    <div className="flex">
      <div className="">
        <Login />
        {/* <Login /> */}
      </div>
      <div className="hidden lg:block">
        <Signup />
      </div>
      
    </div>
   </div>
    </div>
     );
}
 
export default LoginPage;