import React from 'react';
import LoginNav from "../Login/LoginNav/LoginNav";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {ReturnHome} from "./Logut.styles";
import {
    LoginCenter,
    LoginContainer,
    LoginHeader,
    LoginPage,
} from "../Login/Login.styles";
const Logout = () => {
    return(
        <LoginPage>
            <LoginNav/>
            <LoginContainer>
                <LoginCenter>
                    <LoginHeader>
                        Wylogowanie nastąpiło <br />pomyślnie!
                    </LoginHeader>
                    <Decoration />
                    <ReturnHome to="/">
                        Strona główna
                    </ReturnHome>
                </LoginCenter>
            </LoginContainer>
        </LoginPage>
    )
};

export default Logout