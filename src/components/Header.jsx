  import { signOut } from "firebase/auth";
   import {auth} from "../utils/firebase";
    import {useNavigate} from "react-router-dom";
const Header = ({context}) => {

    const navigate = useNavigate();
    const handleSignOut = () => {
    signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
                // An error happened.
        });



    }


    return (
        <div className={`${context!=="login" ? "flex justify-between" : ""} absolute w-screen  py-2 bg-gradient-to-b from-black ${context==="login" ? "px-40" : "px-13"}`}>
            <img className={`${context==="login" ? "w-48" : "w-30"}`} src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            
              {context !== "login" && (
                <p onClick={handleSignOut} className="cursor-pointer py-2 text-white font-bold">Sign Out of Netflix</p>
              )}
        </div>
    )
}

export default Header;