import Login from './Login.jsx';
import Browse from './Browse.jsx';
import {useEffect} from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {useDispatch} from "react-redux";
import {addUser,removeUser} from "../utils/createSlice.js";
const Body = () =>
{

   const dispatch = useDispatch();
  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid,email,displayName} = user;
    dispatch(addUser({
      uid: uid,
      email: email,
      displayName: displayName
    }));
   
    
  } else {
      dispatch(removeUser());
  }
});
},[]);

      const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />
        }
      ]);

return (
      <div>
         <RouterProvider  router = {appRouter} /> 
      </div>
        );
}
export default Body;