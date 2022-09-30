import Form from "../form/Form";
import IconEmail from "../icons/IconEmail";
import IconClock from "../icons/IconClock";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {

    const navigate = useNavigate();
    return ( 

        <section className="flex">
            <div className="">
                <h2 className="mt-14 text-solid font-bold text-2xl flex mr-96 pt-24">Reset Password</h2>
                <div>
                    <Form  name="New Password" placeHolder="Enter your email" type="email" required />
                    <IconEmail className="relative bottom-7 left-4" />
                    <Form  name=" Confirm Password" placeHolder="Enter password" type="password" required />
                    <IconClock className="relative bottom-8 left-4" />
                    <div className="">
                        <button 
                        onClick={() => navigate("/passwordReset")}
                        className="rounded text-shine bg-soft w-96 h-10 mt-4">Reset password</button>
                    </div>
                </div>
            </div>    
        </section>
     );
}
 
export default ResetPassword;