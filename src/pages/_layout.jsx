import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import '../reset.css'
export default function Layout() {
  return (
    <Suspense >
      <Outlet />
    </Suspense>
  );
}