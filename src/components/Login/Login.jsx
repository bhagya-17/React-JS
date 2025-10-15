import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/frontend_assets/assets'

const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentSate] = useState("Sign Up")
    return (
        <div className='login'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
                </div>
                <div className="login-popup-inputs">
                    {currentState === 'Login' ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the tearms of use & privacy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrentSate("Sign UP")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrentSate("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login
