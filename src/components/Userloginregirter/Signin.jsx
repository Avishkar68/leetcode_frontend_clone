import React from 'react'
import { Link } from 'react-router-dom'
function Signin() {
    const handleloggedin = (event) => {
        event.preventDefault()
        console.warn("hel")
    }
    const handlesignup = (event) => {
        event.preventDefault()
        console.warn("hel2")
    }
    return (
        <div className="container flex ">
            <div className="form">
                <h1 id="main-text"><img src='https://leetcode.com/static/images/LeetCode_logo_rvs.png'></img>Leetcode</h1>
                {/* <p id="secondary-text">Just do it..!</p> */}
                <form action="">
                    <div className="username">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="password">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="buttons flex">
                        
                        <Link to='/register'>
                            <button type="submit" id="signup-btn">Sign up</button>
                        </Link>
                        <Link to='/signindone'>
                        <button type="submit" id="login-btn">Log in</button>
                        </Link>
                        
                    </div>
                </form>
                <p className="or-text">or login through</p>
                <div className="social-links">
                    <a href=""><i className="fa-brands fa-google"></i></a>
                    <a href=""><i className="fa-brands fa-apple"></i></a>
                    <a href=""><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Signin
