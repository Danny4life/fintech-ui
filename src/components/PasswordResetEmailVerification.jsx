import { useNavigate } from "react-router-dom";
import EmailIcon from "../icons/EmailIcon";


const PasswordResetEmailVerification = () => {

    const navigate = useNavigate();
    return ( 
        <section className="bg-bground w-screen h-screen">
            <div className="max-w-4xl h-96 mx-auto bg-shine relative top-1/4 place-items-center flex flex-col justify-center">
                
                <EmailIcon className="relative bottom-8" />
                <h2 className="text-2xl font-bold leading-10">Check your mail</h2>
                <p className="text-xs font-normal leading-5 text-pwdcol">We sent a password reset link to your email <br />
                    please click the link to reset your password
                    <br />
                    <br />
                    Don't recieve the email? <a href className="cursor-pointer text-soft">Click to resend link</a>
                </p>
                <button
                    onClick={() => navigate("/login")}
                    className=" text-shine bg-soft w-32 h-11 mt-4 text-xs leading-5">
                        Back to Login
                </button>
                
            </div>
            
        </section>
     );
}
 
export default PasswordResetEmailVerification;