import React, { useState, useContext } from 'react';
import { FormContainer, LoginPageContainer } from "../../shared/Layout";
import { AuthContext } from '../../shared/Auth';
import { signUp } from '../../../services/auth';

const Register = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState();
  const { setCurrentUser } = useContext(AuthContext);

  // const login = async () => {
  //   const response = await signIn({ email, password });
  //   if (response.data) {
  //     return setCurrentUser(response.data.data);
  //   }
  //   else {
  //     setlError("Error de autenticacion");
  //     console.log(response)
  //   }
  // }



  const register = async () => {
    const response = await signUp({ username, email, password });
    console.log(response);
    setCurrentUser(response.data.data);
  };

  return (
    <LoginPageContainer>
      <FormContainer>
        <input type="text"
          placeholder={"Your full name..."}
          name="name"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input type="text"
          placeholder={"Your email..."}
          name="email"
          onChange={({ target }) => setEmail(target.value + '@gmail.com')}
        />
        <input type="password"
          placeholder={"Your password..."}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button onClick={register}>Register</button>
      </FormContainer>
    </LoginPageContainer >
  );
};

export default Register;

// import React, {useContext} from 'react';
// import {FormContainer, PageContainer} from "../shared/Layout";
// import {signUp} from '../../services/auth';

// import {StyledLink} from "../shared/StyledLink";
// import {AuthContext} from "../shared/Auth";
// import {useForm} from '../../hooks/useForm';

// const Register = () => {
//   const { formData, updateField } = useForm();
//   const {setCurrentUser} = useContext(AuthContext);

//   const register = async () => {
//     const response = await signUp(formData);
//     console.log(response)
//     setCurrentUser(response.data.data);
//   };

//   return (
//       <PageContainer>
//         <h1>Register</h1>
//         <FormContainer>
//           <input type="text"
//                  placeholder={"Your full name..."}
//                  name="name"
//                  onChange={updateField}
//           />
//           <input type="text"
//                  placeholder={"Your username..."}
//                  name="email"
//                  onChange={updateField}
//           />
//           <input type="password"
//                  placeholder={"Your password..."}
//                  name="password"
//                  onChange={updateField}
//           />
//           <button onClick={register}>Register</button>
//           <p>Have an account?<StyledLink to={"/login"}>login</StyledLink></p>
//         </FormContainer>
//       </PageContainer>
//   );
// };

// export default Register;