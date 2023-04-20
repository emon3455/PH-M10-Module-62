import Main from "../Layout/Main";
import {Navigate, createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Catagories from "../Pages/Home/Catagories/Catagories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path:"/",
                element: <Navigate to="/catagory/0"></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/catagory",
        element: <Main></Main>,
        children: [
            {
                path: ":id",
                element: <Catagories></Catagories>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
])

export default router;

