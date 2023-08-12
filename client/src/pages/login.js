import React, {useState} from 'react';
import { useAuth } from '../utils/AuthContext';
import axiosInstance from '../utils/axiosInstance';

export default function Login(){
    // const {login} = useAuth();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/api/users',{
                username,
                password
            });
            // const token = response.data.token
            // login(token)

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