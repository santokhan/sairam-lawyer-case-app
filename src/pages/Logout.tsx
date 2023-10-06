import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

export default function Logout() {
    // logout function here

    // redirect
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])


    return <></>
}