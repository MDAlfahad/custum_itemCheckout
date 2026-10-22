import React from 'react'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const ProfileRoute = () => {
    const navigate = useNavigate();

    const handleLogout=()=>{
        const loginValue = "0"
        localStorage.setItem("loginValue", loginValue)
        navigate("/login-page")
    }
  return (
    <div>
        <Button
        text="Logout"
        onClick={handleLogout}
        />
    </div>
  )
}

export default ProfileRoute