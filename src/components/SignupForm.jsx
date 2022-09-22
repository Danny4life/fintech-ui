import { useState } from "react";
import Icon from "./Icon";

const SignupForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, seLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pin, setPin] = useState("");

    return ( 
        <section className="flex">
            <div className="">
                <h1 className="flex mr-96 pt-24 text-metal font-bold text-2xl">Fintech.africa</h1>
                <h2 className="mt-14 text-solid font-bold text-2xl">Get Started with Fintech</h2>
                <div>
                    <form>
                        <label className="block text text-base font-medium text-solid mt-6">First Name</label>
                        <div>
                        <input  
                        type="text" 
                        placeholder="Enter Your First Name" 
                        className="w-96 h-10 px-4 border rounded-md text-base font-light text-inputColor relative" />
                        <Icon className="relative bottom-8" />

                        </div>
                       
                       
                    </form>
                </div>
            </div>

           
            
        </section>
     );
}
 
export default SignupForm;