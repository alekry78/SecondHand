import styled from 'styled-components';
import {LoginForm} from "../Login/Login.styles";
import {Link} from "react-router-dom";

export const RegisterForm = styled(LoginForm)`
  height:300px;
`
export const RegisterLogin = styled(Link)`
  padding:14px;
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
  outline:none;
  cursor:pointer;
  background:white;
  border:none;
  text-decoration:none;
`
export const RegisterFocus = styled.button`
  padding:14px;
  border:1px solid ${({theme})=>theme.color.grey};
  outline:none;
  cursor:pointer;
  background:white;
  font-size:18px;
`