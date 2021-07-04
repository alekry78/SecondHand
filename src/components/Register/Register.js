import React, {useState} from 'react';
import {
    Buttons,
    LoginCenter,
    LoginContainer,
    LoginHeader,
    LoginPage
} from "../Login/Login.styles";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {DetailsContainer, Error, Input, Label} from "../Home/HomeContact/HomeContact.styles";
import LoginNav from "../Login/LoginNav/LoginNav";
import {RegisterFocus, RegisterForm, RegisterLogin} from "./Register.styles";

const RegisterPage = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[samePassword,setSamePassword]=useState("");
    const[error,setError]=useState({
        email:"",
        password:"",
        samePassword:"",
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
    const validateSamePassword = (samePassword,password) => {
        if(samePassword === password){
            return true;
        }else{
            return false
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
        if(validateSamePassword(samePassword,password)===false){
            setError(prevState=>{
                return{
                    ...prevState,
                    samePassword:"Hasła nie są takie same!",
                    error:true
                }
            })
        }else{
            setError(prevState=>{
                return{
                    ...prevState,
                    samePassword:"",
                    error:false
                }
            })
        }
    }
    return(
        <LoginPage>
            <LoginNav />
            <LoginContainer>
                <LoginCenter>
                    <LoginHeader>
                        Zarejestruj się
                    </LoginHeader>
                    <Decoration />
                    <RegisterForm>
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
                        <DetailsContainer>
                            <Label>
                                Powtórz hasło
                            </Label>
                            <Input type="password" value={samePassword} onChange={e=>setSamePassword(e.target.value)} className={error.password.length > 1 ? "error" : null}/>
                            {error.samePassword.length > 1 ? <Error>{error.samePassword}</Error> : null}
                        </DetailsContainer>
                    </RegisterForm>
                    <Buttons>
                        <RegisterLogin to="/login">
                            Zaloguj się
                        </RegisterLogin>
                        <RegisterFocus onClick={handleValidate}>
                            Załóż konto
                        </RegisterFocus>
                    </Buttons>
                </LoginCenter>
            </LoginContainer>
        </LoginPage>
    )
};

export default RegisterPage