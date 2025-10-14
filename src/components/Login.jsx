import Header from './Header.jsx';
import {useState, useRef} from "react";
import {validateStatus} from "../utils/validate";
 import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
 import {auth} from "../utils/firebase";
 import {useNavigate} from "react-router-dom";
 import {useDispatch} from "react-redux";
 import {addUser} from "../utils/createSlice.js";
const Login = () =>
{
    let returnedMsg = '';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoginForm, setIsLoginForm] = useState(true);
    const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMsg,setErrorMsg] = useState(null);

    const toggleSignInBtn = () => {
        setIsLoginForm(!isLoginForm);
    }

    const checkValidation = () => {
           if(!isLoginForm) 
           { 
            //if it is a SignUp Form
              returnedMsg = validateStatus(email.current.value,password.current.value,fullname.current.value);
              if(returnedMsg === null) 
              { 
               //valid Signup Form
               createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => 
                    {
                    const user = userCredential.user;
                    console.log("Successful Sign Up", user);
                    //After Successful Signup display Name on the redux store got updated with the full name on the signup form
                    updateProfile(auth.currentUser, 
                    {
                    displayName: fullname.current.value
                    }).then(() => {
                        // Profile updated!
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch(addUser({
                              uid: uid,
                              email: email,
                              displayName: displayName
                            }));
                            navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                          setErrorMsg(error.message);
                    });
                   })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + "-" + errorMessage);
                });
            }
        }
           else 
        {
            //if it is a SignIn Form
            returnedMsg = validateStatus(email.current.value,password.current.value);
            if(returnedMsg === null) 
            { //Valid SignIn Form
              signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Successful Sign In", user);
                    navigate("/browse");
            })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMsg(errorCode + "-" + errorMessage);
            });
            }
           }
           setErrorMsg(returnedMsg);
    }
    return (
        <>
            <div className="relative"> 
              <Header context="login"/>
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
               <p className="text-red-600 font-bold px-10 py-3  my-2"> {errorMsg} </p>
               <p onClick={toggleSignInBtn} className="text-white font-bold px-10 py-4 my-2 cursor-pointer"> { isLoginForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In."}</p> 
              </form>  
            </div>
        </>
    )
}

export default Login;