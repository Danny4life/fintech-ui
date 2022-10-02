import Form from "../form/Form";
import IconEmail from "../icons/IconEmail";
import IconClock from "../icons/IconClock";
import { Link } from "react-router-dom";


const Login = () => {

    
    return ( 
        <section className="flex">
        <div className="">
            <h1 className="flex mr-96 pt-24 text-metal font-bold text-2xl">Fintech.africa</h1>
            <h2 className="mt-14 text-solid font-bold text-2xl">Hi, Welcome back</h2>
            <div>
                
                <Form  name="Email" placeHolder="Enter your email" type="email" required />
                <IconEmail className="relative bottom-7 left-4" />
                <Form  name="Password" placeHolder="Enter password" type="password" required />
                <IconClock className="relative bottom-8 left-4" />
                <p>
                    <Link to="/forgetPassword" className="text-base text-pwd cursor-pointer">
                        Forgot Password?
                    </Link>
                </p>
                <div className="">
                    <button className="rounded text-shine bg-soft w-96 h-10 mt-10">Login</button>
                </div>
            </div>
              <div className="mt-12">
                <span className="text-solid text-base">Don't have an accont? 
                    <Link to="/signUp" className="cursor-pointer text-soft">
                        Create account
                    </Link>
                </span>
             </div>   
        </div>    
    </section>
     );
}
 
export default Login;