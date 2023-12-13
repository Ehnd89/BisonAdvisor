import React, { useState } from 'react';
import './login.css';
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg';

function LogIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json;
    console.log(data);
  };
  return (
    <>
      <div className='Centered'>
        <div className='HeaderBox'>
          <p className='BisonAdvisor'>Bison Advisor</p>
        </div>

        <div className='Box'>
          <div className='LogoContainer'>
            <img src={imageUrl} alt='Howard Bison Logo' className='Logo' />
          </div>

          <form onSubmit={submitForm}>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='loginbtn'>
              <button type='submit'>Login</button>
            </div>
          </form>
          <div className='signInLine'>
            Aren't Registered?
            <a href='/register' className='Registerbtn'>
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
