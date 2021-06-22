import styled from 'styled-components';
import {Element} from 'react-scroll'
export const AboutContainer = styled(Element)`
  width:100%;
  display:flex;
`
export const Image = styled.img`
  width:50%;
`
export const About = styled.div`
  background-color:${({theme})=>theme.color.white};
  width:50%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  svg{
    margin:40px 0 60px 0;
  }
  span+svg{
    align-self:flex-end;
  }
  padding:80px 100px;
`
export const Title = styled.h1`
  font-size:38px;
  color:${({theme})=>theme.color.darkGrey};
`
export const Desc = styled.span`
  font-size:30px;
  color:${({theme})=>theme.color.darkGrey};
  text-align:center;
  line-height:54px;
  margin:0 150px;
`