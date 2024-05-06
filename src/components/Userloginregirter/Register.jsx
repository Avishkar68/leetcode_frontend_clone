import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className="container container2 flex ">
            <div className="form form2">
                <h1 className="main-text"><img src='https://leetcode.com/static/images/LeetCode_logo_rvs.png'></img>Leetcode</h1>
                <form action="">
                    <div className="username-reg">
                        <label for="username-reg">Username</label>
                        <input type="text" name="username" id="username-reg-inp" />
                    </div>
                    <div className="username-reg">
                        <label for="username-reg">Email</label>
                        <input type="text" name="username" id="username-reg-inp" />
                    </div>
                    <div className="username-reg">
                        <label for="username-reg">Password</label>
                        <input type="text" name="username" id="username-reg-inp" />
                    </div>
                    <div className="username-reg">
                        <label for="username-reg">Confirm password</label>
                        <input type="text" name="username" id="username-reg-inp" />
                    </div>
                    <div className='remember'><input type='checkbox' />Remember me</div>
                    <div className='button-reg'>
                        <button >Sign up</button>
                        <Link to='/signin'>
                            <button type='submit'>Login</button>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
