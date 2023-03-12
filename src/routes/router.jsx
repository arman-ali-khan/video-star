import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../components/Home/Home";
import Upload from "../Pages/Upload/Upload";
import Main from "../Layout/Main";
import Feed from "../Pages/Feed/Feed";
import Trending from "../Pages/Trending/Trending";
import Video from "../Pages/Videos/Video";

export const router = createBrowserRouter([
    {path:'/',element:<Main />,children:[
        {path:'/',element:<Home />},
        {path:'/login',element:<Login />},
        {path:'/register',element:<Register />},
        {path:'/trending',element:<Trending />},
        {path:'/upload/:id',element:<Upload />,loader:({params})=>fetch(`${import.meta.env.VITE_APP_API}/video/${params.id}`)},
        {path:'/video/:id',element:<Video />,loader:({params})=>fetch(`${import.meta.env.VITE_APP_API}/video/${params.id}`)},
        {path:'/feed/:id',element:<Feed />,loader:({params})=>fetch(`${import.meta.env.VITE_APP_API}/videos/${params.id}`)},
    ]}
])