import React, { useEffect } from "react";
import {Dashboard, Welcome} from '../components'
import { useAuthContext } from "../context/authContext";

const Homepage = () => {

    const {tokenStatus, getTokenUser} = useAuthContext()

    useEffect(() => {
        getTokenUser()
    }, [])

    return (
        <div className="h-fit bg-white dark:bg-darkBackground">
            {tokenStatus ? <Dashboard /> : <Welcome />}
        </div>
    )
}

export default Homepage