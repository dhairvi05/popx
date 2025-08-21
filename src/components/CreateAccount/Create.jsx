import React from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created!");
    navigate('/');
  };
    return (
        <>
          <h1>
            Create your <br/>
            PopX account
          </h1>
          <form className='form' onSubmit={handleSubmit}>
            <fieldset>
              <legend className='required'>Full Name</legend>
              <label for='name'></label>
              <input type='text' id='name' placeholder='Marry Doe' required/>
            </fieldset>
            <fieldset>
              <legend className='required'>Phone number</legend>
              <label for='phone'></label>
              <input type='tel' id='phone' placeholder='+91 xxxxxxxxxx' required/>
            </fieldset>
            <fieldset>
              <legend className='required'>Email address</legend>
              <label for='email'></label>
              <input type='email' id='email' placeholder='marydoe@gmail.com' required/>
            </fieldset>
            <fieldset>
              <legend className='required' >Password</legend>
              <label for='password'></label>
              <input type='password' placeholder='Password' required/>
            </fieldset>
            <fieldset>
              <legend>Company name</legend>
              <label for='company'></label>
              <input type='text' placeholder='Educase India'/>
            </fieldset>
            <fieldset>
              <label className='inline required' required>Are you an Agency?</label><br/>
              <label for='yes' className='inline'><input type='radio' id='yes' name='agency' required/>Yes</label>
              <label for='no' className='inline'><input type='radio' id='no' name='agency' required/>No</label>
            </fieldset>
            <button className='btn' type='submit'>Create Account</button> <br/>
          </form>
        </>
    );
}

export default Create