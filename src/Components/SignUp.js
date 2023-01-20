import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import axios from "../axios";
function SignUp() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    "name": "",

    "email": "",

    "password": "",
  });
 
  let loginData ;
  if(localStorage.getItem("loginDetails")===null){
    loginData = [];
  }
  else{
    loginData = JSON.parse(localStorage.getItem("loginDetails"));
  }
  // console.log(loginData);
  const signup = (e) => {
    // e.preventDefault();
   console.log(login);
    // const initialData = {...loginData};
    loginData.push(login);
    localStorage.setItem("loginDetails",JSON.stringify(loginData))
  };

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="https://etimg.etb2bimg.com/photo/87203105.cms" alt="" />
      </Logo>
      <form>
        <FormContainer>
          <h3>Sign-Up</h3>

          <InputContainer>
            <p>FullName</p>
            <input
              type="text"
              placeholder="Arpita Pathak"
              name="name"
              value={login.name}
              onChange={(e) => {
                console.log(e.target.value);
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
          </InputContainer>
          <InputContainer>
            <p>Email</p>
            <input
              type="email"
              placeholder="example@example.com"
              name="email"
              value={login.email}
              onChange={(e) => {
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
          </InputContainer>
          <InputContainer>
            <p>Password</p>
            <input
              type="password"
              placeholder="****"
              name="password"
              value={login.password}
              onChange={(e) => {
                setLogin({ ...login, [e.target.name]: e.target.value });
              }}
            />
          </InputContainer>
          <SignUpButton onClick={(e) =>{signup(e)}}>Create Account in Meesho</SignUpButton>
        </FormContainer>
      </form>
      <LoginButton onClick={() => navigate("/login")}>
        Back to Login
      </LoginButton>
    </Container>
  );
}
const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media  (max-width: 780px){
    margin-left:-80px;
    position:fixed;
  }
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 120%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 2px solid palevioletred;
    }
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;
  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

const LoginButton = styled.button`
  width: 55%;
  height: 35px;
  background-color: rgb(244, 51, 151);
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;

  @media  (max-width: 780px){
    margin-left:80px;
  }
  @media (min-width: 750px) or (max-width:1400px){
    margin-left:100px;
  }
`;

export default SignUp;