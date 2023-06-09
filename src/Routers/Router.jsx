import Main from "../Layout/Main";
import {Navigate, createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Catagories from "../Pages/Home/Catagories/Catagories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import TermsAndConditions from "../Pages/Terms/TermsAndConditions";

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
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
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
                loader: ({params}) => fetch(`https://dragon-news-react-server-emon3455.vercel.app/catagories/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoutes> <News></News> </PrivateRoutes>,
                loader: ({params})=> fetch(`https://dragon-news-react-server-emon3455.vercel.app/news/${params.id}`)
            }
        ]
    },
])

export default router;

