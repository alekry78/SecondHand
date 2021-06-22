import styled from 'styled-components';

export const Columns = styled.section`
  width:100%;
  background-color:${({theme})=>theme.color.yellow};
  display:flex;
  justify-content:space-around;
  align-items:center;
`
export const Column = styled.div`
  display:flex;
  flex-direction:column;
  width:20%;
  align-items:center;
  margin:50px 0;
  justify-content:center;
  color:${({theme})=>theme.color.brown};
`
export const Counter = styled.span`
  font-size:80px;
  margin:15px;
  font-weight:300;
`
export const Title = styled.span`
  font-size:20px;
  margin:15px;
  text-transform:uppercase;
`
export const Desc = styled.span`
  font-size:15px;
  margin:15px;
  text-align:center;
`