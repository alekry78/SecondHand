import React from 'react';
import { Auth, Login, Navigation, Register} from "../../Home/HomeHeader/HomeHeader.styles";
import {Anchor} from "../Login.styles";

const LoginNav = () => {
    return(
        <>
            <Auth>
                <Login to="/login">
                    Zaloguj
                </Login>
                <Register to="/register">
                    Załóż konto
                </Register>
            </Auth>
            <Navigation>
                <Anchor to="/#Start">
                    Start
                </Anchor>
                <Anchor to="/#Steps">
                    O co chodzi?
                </Anchor>
                <Anchor to="/#About">
                    O nas
                </Anchor>
                <Anchor to="/#Help" >
                    Fundacja i organizacje
                </Anchor>
                <Anchor to="/#Contact">
                    Kontakt
                </Anchor>
            </Navigation>
        </>
    )
};

export default LoginNav