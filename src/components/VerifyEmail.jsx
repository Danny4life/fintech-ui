import EmailIcon from "../icons/EmailIcon";

const VerifyEmail = () => {
    return ( 
        <section className="bg-bground w-screen h-screen">
            <div className="max-w-4xl h-96 mx-auto bg-shine relative top-1/4 place-items-center flex flex-col justify-center">
                
                <EmailIcon className="relative bottom-8" />
                <h2 className="text-2xl font-bold leading-10">Verify your email</h2>
                <p className="text-xs font-normal leading-5 text-pwdcol">Hi there, use the link below to verify <br />
                    your email and start enjoying Fintech
                </p>
                <button

                    className=" text-shine bg-soft w-32 h-11 mt-4 text-xs leading-5">
                        Verify email
                </button>
                
            </div>
            
        </section>
     );
}
 
export default VerifyEmail;