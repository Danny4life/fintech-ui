


const Form = (props) => {

    
  

    return ( 

        <div className="">
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