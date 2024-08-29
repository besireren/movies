
import { Link, Outlet, useLocation } from "react-router-dom";
import './style.scss';
const Layout = () => {
    const location = useLocation();
    return (
        <div className="layout-wrapper">
            <div className="layout-head-wrapper">
                {location.pathname !== '/' &&
                    <Link to="/">Home</Link>
                }
                <h1>Movies</h1>
            </div>
            <Outlet />
        </div>
    );
}

export default Layout