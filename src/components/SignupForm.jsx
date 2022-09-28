
import Form from "../form/Form";
import Icon from "../icons/Icon";
import IconEmail from "../icons/IconEmail";
import IconPhone from "../icons/IconPhone";
import IconClock from "../icons/IconClock";
import { useNavigate } from "react-router-dom";

 

const SignupForm = () => {
    
    const navigate = useNavigate();

  return ( 
        <section className="flex">
            <div className="">
                <h1 className="flex mr-96 pt-24 text-metal font-bold text-2xl">Fintech.africa</h1>
                <h2 className="mt-14 text-solid font-bold text-2xl">Get Started with Fintech</h2>
                <div>
                    <Form 
               
                    name="First Name" 
                    placeHolder="Enter your first name" type="text" required 
                
                     />
                    <Icon className="relative bottom-8 left-4" />
                    <Form 
                      name="Last Name" 
                      placeHolder="Enter your last name" type="text" required
                      
                       />
                    <Icon className="relative bottom-8 left-4" />
                    <Form 
                      name="Email" 
                      placeHolder="Enter your email" type="email" required  
                      
                      />
                    <IconEmail className="relative bottom-7 left-4" />
                    <Form 
                    name="Phone Number" placeHolder="Enter phone number" type="number" required  
                   
                    />
                    <IconPhone className="relative bottom-8 left-4" />
                    <Form  name="BVN" placeHolder="Enter your bvn" type="number" required />
                    <Form 
                    
                    name="Password" placeHolder="Enter password" type="password" required  
                    
                    />
                    <IconClock className="relative bottom-8 left-4" />
                    <Form 
                   
                    name="Confirm Password" 
                    placeHolder="Confirm password" type="password" required  
                    />
                    <IconClock className="relative bottom-8 left-4" />
                    <Form 
                    
                    name="Pin" 
                    placeHolder="Enter transaction pin" type="number" required  
                    
                    />

                    <div className="">
                        <button className="rounded text-shine bg-soft w-96 h-10 mt-10">Sign Up</button>
                    </div>
                </div>
                  <div className="mt-12">
                    <span className="text-solid text-base">Already have an accont? 
                        <a onClick={() => navigate("/login")} href className="cursor-pointer">Login</a>
                    </span>
                 </div> 
               
              
            </div>
            
           

           
            
        </section>
     );
}
 
export default SignupForm;