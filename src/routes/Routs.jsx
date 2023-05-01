
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../Components/404 Page/Error";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
    ]
    },
    {
      path: "*",
      element: <Error></Error>
    },
  ]);

  export default router;
  