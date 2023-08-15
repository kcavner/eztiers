import React, {useState} from 'react';
import Auth from '../utils/auth'
import axiosInstance from '../utils/axiosInstance';

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
        <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    )
}