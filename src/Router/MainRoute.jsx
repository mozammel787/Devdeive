import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Registration from "../Pages/Registration";
import AllCourses from "../Pages/AllCourses";
import PrivateLayout from "../Layout/PrivateLayout";
import PrivetRouter from "./PrivetRouter";
import SingleCourse from "../Pages/SingleCourse";
import AddCourses from "../Dashboard/AddCourses";
import MyCourses from "../Dashboard/MyCourses";


export const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/Signin",
                element:<LogIn/>
            },
            {
                path:"/Signup",
                element:<Registration/>
            },
            {
                path:"/courses",
                element:<AllCourses/>
            },
            {
                path:"/courses/:id",
                element:<SingleCourse/>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
        ]
    },{
        path:"/dashboard",
        element:<PrivetRouter><PrivateLayout/></PrivetRouter>,
        children:[
            {
                path:"",
                element: <AllCourses/>
            },
            {
                path:"add-courses",
                element: <AddCourses/>
            },
            {
                path:"my-courses",
                element: <MyCourses/>
            },
            {
                path:"courses/edit/:id",
                element:<SingleCourse/>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
        
        ]
    }
])

