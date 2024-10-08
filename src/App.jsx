import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialLoader from "./UI/Animation/InitialLoader";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import {LanguageSwitcher} from "./helpers/LanguageSwitcher";


const router = createBrowserRouter([
  {element: <LanguageSwitcher><AppLayout/></LanguageSwitcher>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/project/:projectName",
        element: <ProjectDetails/>
      },
  ]},
  // {
  //   path:"/administrator",
  //   element: <Login/>
  // },
]);


export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   let loaderTime = setTimeout(() => setIsLoading(!isLoading), 3000);

  //   return () => clearTimeout(loaderTime);

  // }, []); // don't set anything in the dependincies, we only want the initial animation to be at the first render of the page


  // useEffect(() => {
  //   if(!isLoading){
  //     let loaderExitTime = setTimeout(() => setShowLoader(false), 500);
  //     return () => clearTimeout(loaderExitTime);
  //   }
  // }, [isLoading]);
  
  return ( 
    // showLoader ? 
    //     <InitialLoader isLoading={isLoading}/>
    //     :
        <RouterProvider router={router}/>

  )
}
