import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LoginContainer, Button } from './Login.styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(logIn({ email, password }));
  };

  return (
    <LoginContainer>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '320px',
      margin:'0 auto',
      paddingTop:'30px',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          style={{
            m: 1,
            width: '37ch',
            backgroundColor: '#ffff',
            borderRadius: '10px',
            marginBottom: '2ch',
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          style={{
            m: 1,
            width: '37ch',
            backgroundColor: '#ffff',
            marginBottom: '5ch',
            borderRadius: '10px',
          }}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit">Login</Button>
      </form>
    </LoginContainer>
  );
}
