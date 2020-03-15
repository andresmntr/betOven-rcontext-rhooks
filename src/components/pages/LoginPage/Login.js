import React, { useState, useContext } from 'react';
import { FormContainer, LoginPageContainer } from "../../shared/Layout";
import { Button, Input1, Input2, Logicon, ErrorMsg } from "../../shared/Comps";
import { AuthContext } from '../../shared/Auth';
import { signIn}   from '../../../services/auth';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setCurrentUser } = useContext(AuthContext);
  
  const [lerror, setlError] = useState();

  const login = async () => {
    const response = await signIn({ email, password });
    if (response.data) {
      return setCurrentUser(response.data.data);
    }
    else {
      setlError("Error de autenticacion");
      console.log(response)
    }
  }

  return (
    <LoginPageContainer>
      <FormContainer>
        <Logicon/>
        <Input2 type="text"
          placeholder={"Insert Username"}
          onChange={({ target }) => setEmail(target.value + '@gmail.com')} />

        <Input1 type="password"
          placeholder={"Insert Password"}
          onChange={({ target }) => setPassword(target.value)} />

        {lerror ? (<ErrorMsg> Error de autenticación</ErrorMsg>) : (<div></div>)} 

        <Button onClick={login}>Login</Button>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default Login;