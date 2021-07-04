import React, {useState} from 'react';
import {LoginForm, LoginPage, LoginContainer, LoginHeader, LoginCenter, Buttons, Register, LogIn} from "./Login.styles";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg"
import {DetailsContainer, Error, Input, Label} from "../Home/HomeContact/HomeContact.styles";
import LoginNav from "./LoginNav/LoginNav";
const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState({
        email:"",
        password:"",
        error:false
    })
    const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const validatePassword = (password) =>{
        if(password.length >= 6){
            return true;
        }else{
            return false;
        }
    }
    const handleValidate = () =>{
        if(validateEmail(email)===false){
            setError(prevState=>{
                return{
                    ...prevState,
                    email:"Podany email jest nieprawidłowy!",
                    error:true
                }
            })
        }else{
            setError(prevState=>{
                return{
                    ...prevState,
                    email:"",
                    error:false
                }
            })
        }
        if(validatePassword(password)===false){
            setError(prevState=>{
                return{
                    ...prevState,
                    password:"Podane hasło jest za krótkie!",
                    error:true
                }
            })
        }else{
            setError(prevState=>{
                return{
                    ...prevState,
                    password:"",
                    error:false
                }
            })
        }
    }
    return(
        <LoginPage>
            <LoginNav/>
            <LoginContainer>
                <LoginCenter>
                    <LoginHeader>
                        Zaloguj się
                    </LoginHeader>
                    <Decoration />
                    <LoginForm>
                        <DetailsContainer>
                            <Label>
                                Email
                            </Label>
                            <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} className={error.email.length > 1 ? "error" : null}/>
                            {error.email.length > 1 ? <Error>{error.email}</Error> : null}
                        </DetailsContainer>
                        <DetailsContainer>
                            <Label>
                                Hasło
                            </Label>
                            <Input type="password" value={password} onChange={e=>setPassword(e.target.value)} className={error.password.length > 1 ? "error" : null}/>
                            {error.password.length > 1 ? <Error>{error.password}</Error> : null}
                        </DetailsContainer>
                    </LoginForm>
                    <Buttons>
                        <Register to="/register">
                            Załóż konto
                        </Register>
                        <LogIn onClick={handleValidate}>
                            Zaloguj się
                        </LogIn>
                    </Buttons>
                </LoginCenter>
            </LoginContainer>
        </LoginPage>
    )
};

export default Login