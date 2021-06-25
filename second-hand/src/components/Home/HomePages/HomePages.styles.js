import styled from 'styled-components';
import {Element} from 'react-scroll';

export const Container = styled(Element)`
  width:100%;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-bottom:180px;
`
export const Title = styled.h1`
  font-size:38px;
  color:${({theme})=>theme.color.darkGrey};
  margin:70px 0 25px 0;
`
export const Foundations = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Foundation = styled.span`
  &.active{
    border:1px solid ${({theme})=>theme.color.darkGrey};
  }
  cursor:pointer;
  font-size:24px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:${({theme})=>theme.color.darkGrey};
  width:200px;
  height:80px;
  padding:10px 20px;
  margin:60px 70px;
  text-align:center;
`
export const HelpContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:70%;
`
export const Desc = styled.p`
  width:50%;
  font-size:22px;
  color:${({theme})=>theme.color.darkGrey};
  text-align:center;
  margin-bottom:30px;
`
export const Organizations = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
`
export const Organization = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:30px;
  &.middle{
    border-top:1px solid ${({theme})=>theme.color.grey};
    border-bottom:1px solid ${({theme})=>theme.color.grey};
  }
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`
export const OrganizationName = styled.h1`
  font-size:26px;
  color:${({theme})=>theme.color.darkGrey};
`
export const OrganizationDesc = styled.p`
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
`
export const Stuff = styled.p`
  font-size:18px;
  color:${({theme})=>theme.color.grey};
`
export const Pages = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Page = styled.span`
  cursor:pointer;
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
  &.active{
    border:1px solid ${({theme})=>theme.color.darkGrey};
  }
  padding:15px;
  margin:10px;
`