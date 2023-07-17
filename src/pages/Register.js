import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(register({ name, email, password }));
  };
  return (
    <>
      <div>Register</div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '320px',
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="name"
          variant="standard"
          type="text"
          name="name"
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          type="email"
          name="email"
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
