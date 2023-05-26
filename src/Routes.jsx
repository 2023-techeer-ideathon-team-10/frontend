// eslint-disable-next-line no-unused-vars
import React,{ lazy } from "react";
import Layout from "./pages/_layout";

const Main = lazy(() => import("./pages/main/main"));



export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main/> },
    ],
  },
];

export const pages = [{ route: "/" }];