import React, { useState } from "react";
import "./css/Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from './firebase.js'

function Login() {
  const history = useHistory(); //programatically change the url
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault(); //prevent refreshing
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
          history.push('/')
      })
      .catch(error => alert(error.message));
  }

  const register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          if(auth){
            history.push('/'); //redirect
          }
        })
        .catch(error => alert(error.message))

  }

  return (
    <div className="login">
      <Link to='/'>
          <img
              className="login__logo"
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          />
      </Link>

      <div className="login__container">
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit'  className='login__signInButton' onClick={signIn}>Sign In</button>
          </form>

          <p>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
              see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button type='submit' className='login__registerButton' onClick={register}>Create your Amazon Account</button>
      </div>
      <Link to='/' className="login__link">
          <p className="login__link">Back to the main page</p>
      </Link>

    </div>
  );
}

export default Login;
