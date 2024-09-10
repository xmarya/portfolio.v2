import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialLoader from "./UI/Animation/InitialLoader";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProjectDetails from "./pages/ProjectDetails";


const router = createBrowserRouter([
  {element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/projects/:projectName",
        element: <ProjectDetails/>
      },
  ]},
  {
    path:"/administrator",
    element: <Login/>
  },
]);


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let loaderTime = setTimeout(() => setIsLoading(!isLoading), 5000);

    return () => clearTimeout(loaderTime);

  }, []); // don't set anything in the dependincies, we only want the initial animation to be at the first render of the page


  useEffect(() => {
    if(!isLoading){
      let loaderExitTime = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(loaderExitTime);
    }
  }, [isLoading]);
  return ( 
    // showLoader ? 
    //     <InitialLoader isLoading={isLoading}/>
    //     :
        <RouterProvider router={router}/>

  )
}
