import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Auth from '../utils/auth'
import axiosInstance from '../utils/axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCat} from '@fortawesome/free-solid-svg-icons';

export default function Login({theme}){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const handleLogin = async (e) => {
      e.preventDefault();
  
      if (username && password) {
        try {
          const response = await axiosInstance.post('/api/users/login', {
            username,
            password
          });
  
          if (response.data.token) {
            Auth.login(response.data.token);
            window.location.href = '/home'; // Redirect to a protected route
          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('login error', error);
        }
      } else {
        alert('Please enter a username and password.');
      }
    };

    return(
        <div className='login-container'>
      
      <form className="login-form" onSubmit={handleLogin}>
      <h1><span className='ez-span'>EZ</span>tiers</h1>
      <p className='welcome-p'>welcome to EZtiers! <FontAwesomeIcon style={{color: "ffea00",}} icon={faBolt} /> </p>
      <div className='demo-container'>
      <p className='demo-account'>Demo Account</p>
      <p className='demo'>Username: <span className='demo'>demo</span></p>
      <p className='demo'>Password: <span className='demo'>demo123</span></p>
      </div>
        <input
        className='login-item'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <input
        className='login-item'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <button className='login-button' type="submit">Login</button>

        <Link className={`create-account ${theme}`} to="/register">Create an account!</Link>
      </form>
      <a href='https://github.com/kcavner/eztiers' className='github'>Github <FontAwesomeIcon icon={faCat}/></a>
    </div>
    )
}