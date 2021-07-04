import styled from 'styled-components'
import {Link as Redirect} from "react-router-dom";
export const ReturnHome = styled(Redirect)`
  padding:14px;
  font-size:18px;
  color:${({theme})=>theme.color.darkGrey};
  border:1px solid ${({theme})=>theme.color.grey};
  outline:none;
  cursor:pointer;
  background:white;
  text-decoration:none;
`