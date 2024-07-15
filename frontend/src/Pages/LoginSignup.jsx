import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
      <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign-up</h1>
        <div className="loginsignup-fields">
          <input name='username' placeholder="Your name"/>
          <input name='email'  type="email" placeholder="Email" />
          <input name='password'  type="password" placeholder="Password" />
          <button>Continue</button>
          <p className="loginsignup-login"> Already have an account ?<span  >Login here </span> </p>
          
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By signing up, you agree to our Terms & Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup