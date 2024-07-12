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
import CourseEdit from "../Dashboard/CourseEdit";
import MyProfile from "../Dashboard/MyProfile";
import EditProfile from "../Dashboard/EditProfile";
import Payment from "../Payment/Payment";
import PaymentComplete from "../Payment/PaymentComplete";
import PageNotFount from "../Pages/PageNotFount";
import EnrolledCourses from "../Dashboard/EnrolledCourses";
import CourseWatchingpage from "../Dashboard/CourseWatchingpage";
import OrderHistory from "../Dashboard/OrderHistory";
import ContactUs from "../Pages/ContactUs";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFount />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Signin",
        element: <LogIn />,
      },
      {
        path: "/Signup",
        element: <Registration />,
      },
      {
        path: "/courses",
        element: <AllCourses />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/courses/:id",
        element: <SingleCourse />,
        loader: ({ params }) =>
          fetch(`https://devdrive-server.onrender.com/course/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRouter>
        <PrivateLayout />
      </PrivetRouter>
    ),
    errorElement: <PageNotFount />,
    children: [
      {
        path: "",
        element: <MyProfile />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "search",
        element: <AllCourses />,
      },

      {
        path: "add-courses",
        element: <AddCourses />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourses />,
      },
      {
        path: "Order-history",
        element: <OrderHistory />,
      },
      {
        path: "courses/edit/:id",
        element: <CourseEdit />,
        loader: ({ params }) =>
          fetch(`https://devdrive-server.onrender.com/course/${params.id}`),
      },
      {
        path: "courses/watch/:id",
        element: <CourseWatchingpage />,
        loader: ({ params }) =>
          fetch(`https://devdrive-server.onrender.com/course/${params.id}`),
      },
      {
        path: "courses/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://devdrive-server.onrender.com/course/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    element: <PageNotFount />,
  },
  {
    path: "/paymentcomplete",
    element: <PaymentComplete />,
  },
]);
