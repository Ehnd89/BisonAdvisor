import React, { useState } from 'react';
import './register.css';
const imageUrl =
  'https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg';

export function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5001/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
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

            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='registerbtn'>
              <button type='submit'>Register</button>
            </div>
          </form>
          <div className='signInLine'>
            Already Registered?
            <a href='/login' className='Loginbtn'>
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
