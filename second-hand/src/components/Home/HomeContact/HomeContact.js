import React, {useEffect, useState} from 'react';
import {
    Contact, Copyright,
    Details,
    DetailsContainer, Empty, Error, Footer,
    Form,
    FormContainer,
    Input,
    Label, Socials, Submit,
    Textarea,
    Title
} from "./HomeContact.styles";
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import Facebook from "../../../assets/Facebook.svg";
import Instagram from "../../../assets/Instagram.svg";
const HomeContact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [msg,setMsg]=useState("");
    const [error,setError]=useState({
        error:false,
        name:"",
        email:"",
        msg:"",
        success:false
    })
    useEffect(()=>{
        if(error.error === false && error.success === true){
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
                method:"POST",
                body:JSON.stringify({
                    name,
                    email,
                    message:msg
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
                .then(response=>response.json())
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
        }
    },[error])
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateName(name) === false){
            setError(prevState=>{
                return{
                    ...prevState,
                    name:"Podane imię jest nieprawidłowe!",
                    error:true
                }
            })
        }else{
            setError(prevState=>{
                return{
                    ...prevState,
                    name:"",
                    error:false,
                    success:true
                }
            })
        }
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
                    error:false,
                    success:true
                }
            })
        }
        if(validateMsg(msg)===false){
            setError(prevState=>{
                return{
                    ...prevState,
                    msg:"Wiadomość musi miec conajmniej 120 znaków!",
                    error:true
                }
            })
        }else{
            setError(prevState=>{
                return{
                    ...prevState,
                    msg:"",
                    error:false,
                    success:true
                }
            })
        }
    }
    const validateEmail = (email) => {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const validateName = (name) =>{
        if(name.includes(" ") || name.length  <= 1){
            return false;
        }else{
            return true;
        }
    }
    const validateMsg = (msg) =>{
        if(msg.length > 120){
            return true;
        }else{
            return false;
        }
    }
    return(
        <>
        <Contact name="Contact" id="Contact">
            <FormContainer>
                <Title>
                    Skontaktuj się z nami
                </Title>
                <Decoration />
                <Form onSubmit={e=>handleSubmit(e)}>
                    <Details>
                        <DetailsContainer>
                            <Label>
                                Wpisz swoje imię
                            </Label>
                            <Input type="text" placeholder="Olek" onChange={e=>setName(e.target.value)} value={name} className={error.name.length > 1 ? "error" : null}/>
                            {error.name.length > 1 ? <Error>{error.name}</Error> : null}
                        </DetailsContainer>
                        <DetailsContainer>
                            <Label>
                                Wpisz swój email
                            </Label>
                            <Input type="email" placeholder="krysaleksander1@gmail.com" onChange={e=>setEmail(e.target.value)} value={email} className={error.email.length > 1 ? "error" : null}/>
                            {error.email.length > 1 ? <Error>{error.email}</Error> : null}
                        </DetailsContainer>
                    </Details>
                    <DetailsContainer style={{width:"100%"}}>
                        <Label>
                            Wpisz swoją wiadomość
                        </Label>
                        <Textarea  onChange={e=>setMsg(e.target.value)} value={msg} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." rows="5" className={error.msg.length > 1 ? "error" : null}/>
                        {error.msg.length > 1 ? <Error>{error.msg}</Error> : null}
                    </DetailsContainer>
                    <Submit type="submit">Wyślij</Submit>
                </Form>
            </FormContainer>
            <Footer>
                <Empty />
                <Copyright>
                    Copyright by Coders Lab
                </Copyright>
                <Socials>
                    <img src={Facebook} alt="Ikona facebooka"/>
                    <img src={Instagram} alt="Ikona instagrama"/>
                </Socials>
            </Footer>
        </Contact>
        </>
    )
};

export default HomeContact