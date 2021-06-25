import styled from 'styled-components';
import {Element} from 'react-scroll';
export const Contact = styled(Element)`
  width:100%;
  height:1000px;
  background-image: url("../../../assets/Background-Contact-Form.jpg");
  background-repeat:no-repeat;
  background-size: cover;
  background-position:center;
  svg{
    margin:25px 0 70px 0;
  }
  display:flex;
  justify-content:flex-end;
  align-items:center;
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
`
export const Input = styled.input`
  margin-top:10px;
  font-size:18px;
  border:none;
  border-bottom:1px solid ${({theme})=>theme.color.darkGrey};
  color:${({theme})=>theme.color.white};
  &:focus{
    outline:none;
  }
`