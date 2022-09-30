
import { useNavigate } from "react-router-dom";
import Form from "../form/Form";
import IconEmail from "../icons/IconEmail";

const PasswordReset = () => {

    const navigate = useNavigate();
    return ( 
        <section className="w-screen h-screen bg-bground">
            <div className="max-w-4xl h-96 mx-auto bg-shine justify-center flex relative top-1/4">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl text-pwdcol font-bold mt-4 leading-10 mx-auto">Forget Password</h2>
                    <p className="text-xs font-normal text-inputColor leading-5 mx-auto">Enter the email associated with your account and we’ll <br /> send an email with 
                        instruction to reset your password 
                    </p>
                    <div className="ml-20">

                        <Form className=""  name="Email" placeHolder="Enter your email" type="email" required />
                        <IconEmail className="relative bottom-7 left-4" />
                        <div>
                            <button 
                            onClick={() => navigate("/resetPassword")}
                            className="rounded-md text-shine bg-soft w-96 h-10 mt-0">Reset Password</button>
                        </div>
                        <div className="flex ml-24">
                            <button
                            onClick={() => navigate("/login")}
                             className=" text-solid bg-inputColor w-32 h-11 mt-4 text-xs leading-5">
                                Back to Login
                            </button>
                        </div>
                        
                    </div>
                </div>
               
            </div> 
        </section>
     );
}
 
export default PasswordReset;