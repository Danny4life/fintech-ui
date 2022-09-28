
import Signup from "./Signup";
import SignupForm from "./SignupForm";



const Home = () => {
    return ( 
        <div>
            <div className="flex m-0 p-0 justify-end">
        <div className="flex">
          <div className="">
            <SignupForm />
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
 
export default Home;