import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
   
    return (
        <>
          <Header/>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;