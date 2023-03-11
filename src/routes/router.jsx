import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../components/Home/Home";
import Upload from "../components/Upload/Upload";
import Main from "../Layout/Main";
import Video from "../Pages/Videos/Video";

export const router = createBrowserRouter([
    {path:'/',element:<Main />,children:[
        {path:'/',element:<Home />},
        {path:'/login',element:<Login />},
        {path:'/register',element:<Register />},
        {path:'/upload/:id',element:<Upload />,loader:({params})=>fetch(`http://localhost:5000/video/${params.id}`)},
        {path:'/video/:id',element:<Video />,loader:({params})=>fetch(`http://localhost:5000/video/${params.id}`)},
    ]}
])