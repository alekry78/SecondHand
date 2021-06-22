import styled from 'styled-components';
import {Element} from 'react-scroll'
import {Link} from "react-router-dom";
export const EasySteps = styled(Element)`
  width:100%;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  svg{
    margin:40px 0;
  }
`
export const Title = styled.h1`
  color:${({theme})=>theme.color.darkGrey};
  font-size:40px;
  margin:40px 0 0 0 ;
`
export const Steps = styled.div`
  display:flex;
  justify-content:center;
  
  align-items:center;
  width:100%;
  background-color:${({theme})=>theme.color.white};
`
export const Step = styled.div`
  display:flex;
  margin:80px 90px ;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  svg{
    color:black;
    margin:20px;
    overflow: visible;
  }
`
export const SmallTitle = styled.span`
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
`
export const Desc = styled.span`
  font-size:16px;
  color:${({theme})=>theme.color.darkGrey};
  text-align:center;
`
export const Line = styled.span`
  width: 60px;
  height:1px;
  margin:10px 0;
  background-color:${({theme})=>theme.color.grey};
`
export const Button = styled(Link)`
  font-size:36px;
  color:${({theme})=>theme.color.darkGrey};
  padding:10px 90px;
  font-weight:300;
  border:1px solid ${({theme})=>theme.color.darkGrey};
  margin:50px 0 90px 0;
  text-transform:uppercase;
  text-align:center;
  text-decoration:none;
`