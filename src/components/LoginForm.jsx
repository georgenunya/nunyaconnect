import { useState } from 'react';
import Topbar from './topbar/Topbar';
import "./loginform.css"
import TextField from '@material-ui/core/TextField';
import { axiosInstance } from '../config';

const projectID = 'd1185f1e-270b-4795-a596-753e2dd8426e';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axiosInstance.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Try again.');
    }
  };

  return (
      <>
      <Topbar/>
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Please enter your Chat ID</h1>
        <form onSubmit={handleSubmit}>
        <TextField 
        className="chatusername"
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        type="username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} fullWidth required
        />

<TextField 
        className="chatpassword"
        id="outlined-basic" 
        label="Numeric Code" 
        variant="outlined" 
        type="password" 
        value={password} onChange={(e) => setPassword(e.target.value)} 
        fullWidth
        required 
        />
          <div align="center">
            <button type="submit" className="button">
              <span className="chatting">Start chatting</span>
            </button>
          </div>
        </form>
        <h5>{error}</h5>
      </div>
    </div>
    </>

  );
};

export default Modal;