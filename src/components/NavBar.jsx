
import Avatar from "../icons/Avatar";
import NotificationIcon from "../icons/NotificationIcon";


const NavBar = () => {
    return (  
        <nav className="">
            <div className="shadow border-b text-navcol bg-navcol">
                <div className="flex justify-between pt-8 relative bottom-3">
                    <h2 className="text-2xl font-bold text-metal leading-8 ml-20">Fintech.africa</h2>
                    <div className="flex items-center mr-20 space-x-4 relative bottom-1">
                        <NotificationIcon />
                        <Avatar />
                        <span className="text-metal text-xs font-medium">Adetutu</span>
                    </div>
                    

                
                </div>
            </div>

            

        </nav> 
    );
}
 
export default NavBar;