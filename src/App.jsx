import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialLoader from "./UI/Animation/InitialLoader";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Login from "./pages/Login";
import { LanguageProvider } from "./helpers/LanguageContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    element: (
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/:projectName",
        element: <Project />,
      },
    ],
  },
  {
    path:"/administrator",
    element: <Login/>
  },
]);

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0 // immediate refresh
    }
  }
})

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let loaderTime = setTimeout(() => setIsLoading(!isLoading), 3000);

    return () => clearTimeout(loaderTime);

  }, []); // don't set anything in the dependincies, we only want the initial animation to be at the first render of the page

  useEffect(() => {
    if(!isLoading){
      let loaderExitTime = setTimeout(() => setShowLoader(false), 500);
      return () => clearTimeout(loaderExitTime);
    }
  }, [isLoading]);

  return (
    showLoader ?
        <InitialLoader isLoading={isLoading}/>
        :
    <QueryClientProvider client={queryClient}>
      <HelemtProvider>
        <RouterProvider router={router} />
      </HelemtProvider>
    </QueryClientProvider>
  );
}
