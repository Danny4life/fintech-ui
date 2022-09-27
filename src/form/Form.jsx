 //import Icon from "../icons/Icon";
// import IconClock from "../icons/IconClock";
// import IconEmail from "../icons/IconEmail";
// import IconPhone from "../icons/IconPhone";


const Form = (props) => {



    
    return ( 

        <div className="">
        {/* <form className="">
            <label className="block text text-base font-medium text-solid mt-6">
                First Name
                {props.name}
            </label>
            <input 
            type="text" 
            placeholder="Enter your first name" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-12" />
             <Icon className="relative bottom-8 left-4" />
          
           <label className="block text text-base font-medium text-solid">
                Last Name
            </label>
            <input 
            type="text" 
            placeholder="Enter your last name" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-12" />
             <Icon className="relative bottom-8 left-4" />
             <label className="block text text-base font-medium text-solid">
                Email
            </label>
            <input 
            type="text" 
            placeholder="Enter your email" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-12" />
             <IconEmail className="relative bottom-7 left-4" />
             <label className="block text text-base font-medium text-solid">
                Phone Number
            </label>
            <input 
            type="text" 
            placeholder="Enter phone number" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-12" />
             <IconPhone className="relative bottom-8 left-4" />
             <label className="block text text-base font-medium text-solid">
                BVN
            </label>
            <input 
            type="text" 
            placeholder="Enter your BVN" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-4" />
             <label className="block text text-base font-medium text-solid mt-6">
                Password
            </label>
            <input 
            type="text" 
            placeholder="Enter password" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-12" />
             <IconClock className="relative bottom-8 left-4" />
             <label className="block text text-base font-medium text-solid">
               Confirm Password
            </label>
            <input 
            type="text" 
            placeholder="Confirm paswword" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-12" />
             <IconClock className="relative bottom-8 left-4" />
             <label className="block text text-base font-medium text-solid">
                Pin
            </label>
            <input 
            type="text" 
            placeholder="Enter transaction pin" 
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-inputColor relative pl-4" />
             <div className="">
                <button className="rounded text-shine bg-soft w-96 h-10 mt-10">Sign Up</button>
             </div>
            
        </form> */}

        <form>
            <label className="block text text-base font-medium text-solid mt-6">
                {props.name}
            </label>
            <input
            type={props.type}
            placeholder={props.placeHolder}
            id={props.name}
            value={props.value}
            required={props.required}
            className="w-96 h-10 px-4 border rounded-md text-base font-light
             text-solid relative pl-12" />
        </form>

    </div>
     );
}
 
export default Form;