// eslint-disable-next-line no-unused-vars
import React,{ lazy } from "react";
import Layout from "./pages/_layout";

const Main = lazy(() => import("./pages/main/main"));
const List = lazy(() => import("./pages/list/list"));
const Title = lazy(() => import("./pages/title/title"));
const PostForm = lazy(() => import("./pages/input/input"));




export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/main", element: <Main/> },
      { path: "/", element: <Title/> },
      {path:"/list", element:<List/>},
      {path:"/input",element:<PostForm/>}
    ],
  },
];

export const pages = [{ route: "/" },{routes:'/list'}];