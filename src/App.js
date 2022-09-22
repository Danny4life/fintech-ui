import Signup from "./components/Signup";
import SignupForm from "./components/SignupForm";





function App() {
  return (
    <div className="flex m-0 p-0 justify-end">
      <div className="flex">
        <div className="">
          <SignupForm />
        </div>
        <Signup />
      </div>
     </div>
  );
}

export default App;
