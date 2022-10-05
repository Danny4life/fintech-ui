// import Amoeba from "../icons/Amoeba";
import BriefcaseIcon from "../icons/BriefcaseIcon";
import Card from "../icons/Card";
import Eye from "../icons/Eye";
import NavBar from "./NavBar";




const Dashboard = () => {
    return ( 
        <section className="bg-bground w-screen h-screen">
            <NavBar />
            <div className="w-2/4 h-64 bg-shine box-border m-auto mt-9">
                <div>
                    <h3 className="text-sm text-metal font-medium leading-5 ml-40 pt-5">Account Balance</h3>
                    <div className="flex ml-20 gap-3">
                        <BriefcaseIcon />
                        <h1 className="text-2xl font-extrabold text-metal leading-10 mr-11">N2,000,000</h1>
                        <Eye />
                        {/* <Amoeba className="relative bottom-10 left-9" /> */}
                    </div>
                    <span className="ml-40 relative bottom-5 text-sm text-metal text-medium">Wema Bank</span>
                    <div className="flex ml-40 gap-1 relative bottom-4">
                        <Card />
                        <span className="text-sm text-medium text-metal leading-5">1234567890</span>
                    </div>
                   
                </div>

            </div>
        
        </section> 
        
    );
}
 
export default Dashboard;




