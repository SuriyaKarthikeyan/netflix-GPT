import Header from './Header.jsx';
import {useState} from "react";
const Login = () =>
{
    const [isLoginForm, setIsLoginForm] = useState(true);
    const toggleSignInBtn = () => {
        setIsLoginForm(!isLoginForm);
    }
    return (
        <>
            <div className="relative"> 
              <Header />
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_medium.jpg" alt="bg" />    
              <form className="absolute top-2/12 left-2/6 bg-black opacity-90 text-white px-6 py-6 flex flex-col w-[500px] ">
               
               <p className="text-white font-bold px-10 py-4 my-2 text-3xl"> { isLoginForm ? "Sign In" : "Sign Up"} </p>
               {!isLoginForm && 
               (
               <input className="border rounded px-4 py-4 my-2 mx-auto w-4/5 bg-gray-800" type="text" placeholder="Full Name" />
               )}
               <input className="border rounded px-4 py-4 my-2 mx-auto w-4/5 bg-gray-800" type="text" placeholder="Email or Mobile Number" />
               <input className="border rounded px-4 py-4 my-2 mx-auto w-4/5 bg-gray-800"  type="password" placeholder="Password" />
               <button className="bg-red-600 px-4 py-3  my-2 mx-auto rounded font-bold w-4/5"> { isLoginForm ? "Sign In" : "Sign Up"} </button>  
               <p onClick={toggleSignInBtn} className="text-white font-bold px-10 py-4 my-2 cursor-pointer"> { isLoginForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In."}</p> 
              </form>  
            </div>
        </>
    )
}

export default Login;