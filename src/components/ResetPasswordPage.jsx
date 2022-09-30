import ResetPassword from "./ResetPassword";
import Signup from "./Signup";


const ResetPasswordPage = () => {
    return (  
        <div>
            <div className="flex m-0 p-0 justify-end">
            <div className="flex">
            <div className="">
            <ResetPassword />
            </div>
        <div className="hidden lg:block">
            <Signup />
        </div>
        
        </div>
    </div>
    </div>
    );
}
 
export default ResetPasswordPage;