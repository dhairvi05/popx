import React, {useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/create-account');
  };
  const forLogin = () => {
    navigate('/login');
  }

  return (
        <>
          <div className='home'>
            <div className='container'>
                <h1>Welcome to PopX</h1>
                <p>
                    Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit,
                </p>
                <button className='btn' onClick={handleClick}>Create Account</button> <br/>
                <button className='btn1' onClick={forLogin}>Already Registered? Login</button>
            </div>
          </div>
        </>
    );
}

export default Home