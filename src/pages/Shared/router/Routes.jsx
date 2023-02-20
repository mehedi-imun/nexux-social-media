import { createBrowserRouter } from "react-router-dom";
import SignUp from "../../Auth/SignUp";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import MyProfile from "../../MyProfile/MyProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
