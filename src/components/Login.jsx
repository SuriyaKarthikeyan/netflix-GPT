import Header from './Header.jsx';
import {useState, useRef} from "react";
import {validateStatus} from "../utils/validate";
const Login = () =>
{
    let returnedMsg = '';
    const [isLoginForm, setIsLoginForm] = useState(true);
    const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMsg,setErrorMsg] = useState(null);

    const toggleSignInBtn = () => {
        setIsLoginForm(!isLoginForm);
    }

    const checkValidation = () => {
           if(!isLoginForm) {
           returnedMsg = validateStatus(email.current.value,password.current.value,fullname.current.value,);
           }
           else {
            returnedMsg = validateStatus(email.current.value,password.current.value);
           }
           
           setErrorMsg(returnedMsg);
    }
    return (
        <>
            <div className="relative"> 
              <Header />
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_medium.jpg" alt="bg" />    
              <form onSubmit = {(e) => e.preventDefault() } className="absolute top-2/12 left-2/6 bg-black opacity-90 text-white px-6 py-6 flex flex-col w-[500px] ">
               
               <p className="text-white font-bold px-10 py-4 my-2 text-3xl"> { isLoginForm ? "Sign In" : "Sign Up"} </p>
               {!isLoginForm && 
               (
               <input ref={fullname} className="border rounded px-4 py-4 my-2 mx-auto w-4/5 bg-gray-800" type="text" placeholder="Full Name" />
               )}
               <input ref={email} className="border rounded px-4 py-4 my-2 mx-auto w-4/5 bg-gray-800" type="text" placeholder="Email or Mobile Number" />
               <input ref={password} className="border rounded px-4 py-4 my-2 mx-auto w-4/5 bg-gray-800"  type="password" placeholder="Password" />
               <button onClick= {checkValidation} className="bg-red-600 px-4 py-3  my-2 mx-auto rounded font-bold w-4/5"> { isLoginForm ? "Sign In" : "Sign Up"} </button>  
               <p className="text-red-600 font-bold px-4 py-3  my-2 mx-auto"> {errorMsg} </p>
               <p onClick={toggleSignInBtn} className="text-white font-bold px-10 py-4 my-2 cursor-pointer"> { isLoginForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In."}</p> 
              </form>  
            </div>
        </>
    )
}

export default Login;