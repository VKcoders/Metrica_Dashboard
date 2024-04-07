import { useState, useEffect } from "react";

import Loader from "../Components/Loader/Login";
import Menu from "../Components/Menu";
import Content from "./Content";

function Dashboard() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }, []);
    
    return !!loader ? (
        <Loader />
    ) : (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "space-between" }}>
            <Menu />
            <Content />
        </div>
    )
};

export default Dashboard;