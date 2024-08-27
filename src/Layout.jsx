import { Outlet } from "react-router-dom";
import Head from "./Components/Affinity/Header/Head";

export default function Layout() {
  return (
    <div>
        <div className={`container max-w-maxWidth`}>
            <Head />
        </div>
        <Outlet />
    </div>
  )
}
