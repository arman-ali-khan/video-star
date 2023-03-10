import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {path:'/',element:<Main />,children:[
        {path:'/',element:<Home />},
        {path:'/login',element:<Login />},
        {path:'/register',element:<Register />}
    ]}
])