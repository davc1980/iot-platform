import React from "react";
import HomeLayout from "./components/HomeLayout";
import DevicesLayout from "./components/DevicesLayout";
import DashboardLayout from "./components/DashboardLayout";
import SettingsLayout from "./components/SettingsLayout";
import LogOut from "./components/LogOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <h1>error</h1>,
    },
    {
      path: "/devices",
      element: <DevicesLayout />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
    },
    {
      path: "/settings",
      element: <SettingsLayout />,
    },
    {
      path: "/logout",
      element: <LogOut />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
