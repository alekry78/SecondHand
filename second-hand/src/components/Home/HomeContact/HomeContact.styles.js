import styled from 'styled-components';
import {Element} from 'react-scroll';
import Teddy from "../../../assets/Background-Contact-Form.jpg";
export const Contact = styled(Element)`
  width: 100%;
  height: 1000px;
  position: relative;
  svg {
    margin: 25px 0 70px 0;
  }
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-end;
  &:before{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url(${Teddy});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index:-100;
  }
`
export const FormContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-right:140px;
`
export const Title = styled.h1`
  font-size:38px;
  color:${({theme})=>theme.color.darkGrey};
`
export const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:10px;
`
export const Details = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Label = styled.label`
  font-size:16px;
  color:${({theme})=>theme.color.darkGrey};
  font-weight:600;
`
export const DetailsContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  margin:10px;
`
export const Input = styled.input`
  margin-top:10px;
  font-size:18px;
  border:none;
  border-bottom:1px solid ${({theme})=>theme.color.darkGrey};
  color:${({theme})=>theme.color.grey};
  &:focus{
    outline:none;
  }
  &::placeholder{
    color:${({theme})=>theme.color.grey};
  }
  background:none;
  &.error{
    border-bottom:1px solid red;
  }
`
export const Textarea = styled.textarea`
  font-family: ${({theme})=>theme.fonts.fontBase};
  resize:none;
  margin-top:10px;
  font-size:18px;
  width:100%;
  border:none;
  border-bottom:1px solid ${({theme})=>theme.color.darkGrey};
  color:${({theme})=>theme.color.grey};
  &:focus{
    outline:none;
  }
  &::placeholder{
    color:${({theme})=>theme.color.grey};
  }
  background:none;
  &.error{
    border-bottom:1px solid red;
  }
`
export const Submit = styled.button`
  border:1px solid ${({theme})=>theme.color.darkGrey};
  background:none;
  padding:15px 50px;
  font-size:18px;
  font-weight:400;
  align-self:flex-end;
  margin-top:40px;
  cursor:pointer;
`
export const Footer = styled.footer`
  width:100%;
  position: absolute;
  bottom: 10px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`
export const Copyright = styled.h1`
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
`
export const Socials = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  svg{
    fill:${({theme})=>theme.color.darkGrey};
  }
`
export const Error = styled.span`
  font-size:15px;
  color:red;
  font-weight:400;
`
export const Empty = styled.div`
  width:10px;
  height:10px;
`