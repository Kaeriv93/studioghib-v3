import { Outlet } from "react-router-dom";
import {useState, useEffect} from 'react';

const Home = () => {
    return(
        <>
            <Outlet/>
            <h1>This is our home page</h1>
        </>
    )
}

export default Home;