import Form from "../form/Form";
import IconEmail from "../icons/IconEmail";
import IconClock from "../icons/IconClock";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
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
                <p><a onClick={() => navigate("/forgetPassword")} className="text-base text-pwd cursor-pointer" href>Forgot Password?</a></p>
                <div className="">
                    <button className="rounded text-shine bg-soft w-96 h-10 mt-10">Login</button>
                </div>
            </div>
              <div className="mt-12">
                <span className="text-solid text-base">Don't have an accont? 
                    <a onClick={() => navigate("/signUp")} href className="cursor-pointer text-soft">
                        Create account
                    </a>
                </span>
             </div>   
        </div>    
    </section>
     );
}
 
export default Login;