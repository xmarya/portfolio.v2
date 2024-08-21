import { createBrowserRouter } from "react-router-dom"
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Login from "./pages/Login";
import { RouterProvider } from "react-router-dom";


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

  return (
   <RouterProvider router={router}/>
  )
}
