import Main from "../Layout/Main";
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Catagories from "../Pages/Home/Catagories/Catagories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Catagories></Catagories>,
                loader: ()=> fetch(`http://localhost:5000/news`)
            },
            {
                path: "/catagory/:id",
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
    }
])

export default router;

