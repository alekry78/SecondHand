import styled from 'styled-components';
import {Link as Redirect} from "react-router-dom";
import {Link} from 'react-scroll'
export const Section = styled.section`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Image = styled.img`
  width:50%;
  align-self:flex-end;
`
export const Hero = styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
`
export const Auth = styled.div`
  align-self:flex-end;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:30px;
`
export const Login = styled(Redirect)`
  font-size:15px;
  color:${({theme})=>theme.color.grey};
  text-decoration:none;
  margin:0 10px;
`
export const Register = styled(Redirect)`
  font-size:15px;
  color:${({theme})=>theme.color.grey};
  border:1px solid ${({theme})=>theme.color.yellow};
  text-decoration:none;
  padding:10px;
  margin:0 10px;
`
export const Navigation = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Anchor = styled(Link)`
  font-size:20px;
  color:${({theme})=>theme.color.darkGrey};
  cursor:pointer;
  margin:0 10px;
  padding: 10px;
  .active{
    border:1px solid ${({theme})=>theme.color.darkGrey};
  }
`
export const HeaderContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:70%;
  svg{
    margin:20px;
  }
`
export const Header = styled.h1`
  font-size:40px;
  color:${({theme})=>theme.color.darkGrey};
  text-align:center;
  line-height:50px;
`
export const ButtonsContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Button = styled(Redirect)`
  cursor:pointer;
  font-size:45px;
  padding:10px 20px;
  width:300px;
  font-weight:300;
  text-transform:uppercase;
  text-decoration:none;
  margin:10px;
  text-align:center;
  border:2px solid ${({theme})=>theme.color.darkGrey};
  color: ${({theme})=>theme.color.darkGrey};
`