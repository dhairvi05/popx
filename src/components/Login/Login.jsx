import React, {useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isValid = email.trim() !== "" && password.trim() !== "";
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Logged in!");
        navigate('/');
    };

    return (
        <>
          <h1>
            Signin to your <br/>
            PopX account
          </h1>
          <p>
            Lorem ipsum dolor sit amet, <br/>
            consectetur adipiscing elit,
          </p>
          <form className='form' onSubmit={handleSubmit}>
            <fieldset>
              <legend className='required'>Email address</legend>
              <label for='email'></label>
              <input type='email' id='email' placeholder='marydoe@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </fieldset>
            <fieldset>
              <legend className='required' >Password</legend>
              <label for='password'></label>
              <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </fieldset>
            <button className='btn' type='submit' disabled={!isValid}>Login</button> <br/>
          </form>
        </>
    );
}

export default Login