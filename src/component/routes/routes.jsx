import React from "react";
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Edit from "../Edit/Edit";
import Add from "../Add/Add";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
               index:true,
               element:<Home></Home>
            },{
                path:'/add',
                element:<Add></Add>
            },{
                path:'/edit/:eid',
                element:<Edit></Edit>

            }
        ]
    }
]);
  

export default routes;