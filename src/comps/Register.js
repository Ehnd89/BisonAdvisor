import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg';

export function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [passworderror, setPassworderror] = useState(false)
  const [emailerror, setEmailerror] = useState(false)


  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  useEffect(() => {
    if (!isValidEmail(email)) {
      setEmailerror(true)
      }
      else{
        setEmailerror(false)
    }
  }, [email])

  useEffect(() => {
    // if (!isValidEmail(value)) {
    //   const errorMessage = "Try a real email"
    // }

    if (
      password.length >= 8 &&
      /\d/.test(password) &&
      /[A-Z]/.test(password)
    ) {
      setPassworderror(false)
    } else {
      setPassworderror(true)
    }
    console.log({passworderror});
  }, [password])


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

    if(data){
      navigate('/setup')
    }
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

            {emailerror && email.length!=0 &&
            <div>
              Enter a Email
            </div>
            }

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
            
            {passworderror && password.length!=0 &&
            <div>
              password too short
            </div>
            }

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
