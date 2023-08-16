import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import Auth from '../utils/auth'
import axiosInstance from '../utils/axiosInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Login(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/api/users/login',{
                username,
                password
            });
            if (response.data.token) {
              console.log('login success')
              Auth.login(response.data.token)
              window.location.href = '/tier'; // Redirect to a protected route
            } else {
              console.error('Login failed');
            }
        } catch(error){
            console.error('login error', error);
        }

    }

    return(
        <div className='login-container'>
      
      <form className="login-form" onSubmit={handleLogin}>
      <h2><span className='ez-span'>EZ</span>tiers</h2>
      <p>welcome to EZtiers! <FontAwesomeIcon style={{color: "ffea00",}} icon={faBolt} /> </p>
        <input
        className='login-item'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
        className='login-item'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='login-button' type="submit">Login</button>
        <p>Not a user?</p>
        <Link className="create-account" to="/register">Create an account!</Link>
      </form>
    </div>
    )
}