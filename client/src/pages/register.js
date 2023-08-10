import React,{useState} from 'react';
import axiosInstance from '../utils/axiosInstance';

function Register(){
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axiosInstance.post('/api/users', {
            username,
            password
          });
      
          console.log('User created:', response.data);
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };



    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register