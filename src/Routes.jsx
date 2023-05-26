// eslint-disable-next-line no-unused-vars
import React,{ lazy } from "react";
import Layout from "./pages/_layout";

const Main = lazy(() => import("./pages/main/main"));
const List = lazy(() => import("./pages/list/list"));




export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main/> },
      {path:"/list", element:<List/>}
    ],
  },
];

export const pages = [{ route: "/" },{routes:'/list'}];