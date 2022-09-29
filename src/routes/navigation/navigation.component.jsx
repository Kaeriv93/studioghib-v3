import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';


const Navigation = () =>{
    return(
        <>
            <div className="navigation-container">
                <Link className="logo-container" to ='/'>
                    <h2>Home</h2>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to ='/auth'>
                        SIGNIN
                    </Link>
                    <Link className="nav-link" to ='/'>
                        SIGNOUT
                    </Link>
                </div>
            </div> 
            <Outlet/> 
        </>
    )
}

export default Navigation