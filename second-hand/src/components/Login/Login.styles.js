import styled from 'styled-components';
import {Link as Redirect} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export const LoginPage = styled.main`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:white;
`
export const LoginContainer = styled.div`
  flex-grow:1;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
`
export const LoginCenter = styled.div`
  display:flex;
  flex-direction:column;
  width:30%;
  justify-content:center;
  align-items:center;
  svg{
    margin:30px 0 60px 0;
  }
`
export const LoginHeader = styled.h1`
  font-size:40px;
  font-weight:400;
  color:${({theme})=>theme.color.darkGrey};
  text-align:center;
`
export const LoginForm = styled.div`
  width:60%;
  background-color:${({theme})=>theme.color.white};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:230px;
`
export const Buttons = styled.div`
  width:90%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:30px;
`
export const Register = styled(Redirect)`
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
  cursor:pointer;
  text-decoration:none;
`
export const LogIn = styled.button`
  padding:14px;
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
  border:1px solid ${({theme})=>theme.color.grey};
  outline:none;
  cursor:pointer;
  background:white;
`
export const Anchor = styled(HashLink)`
  font-size:20px;
  color:${({theme})=>theme.color.darkGrey};
  cursor:pointer;
  margin:0 10px;
  text-decoration:none;
  padding: 10px;
`