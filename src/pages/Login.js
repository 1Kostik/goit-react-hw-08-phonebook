import { TextField } from '@mui/material'
import React from 'react'

export default function Login() {

  return (
    <>
    <div>Login</div>
    <form style={{display:'flex',flexDirection:'column',width:'320px',margin:'0 auto'}}>
    <TextField id="standard-basic" label="email" variant="standard" type='email'/>
    <TextField id="standard-basic" label="password" variant="standard" type='password' />
    <button type='submit'>Login</button>
    </form>
    </>
  )
}
