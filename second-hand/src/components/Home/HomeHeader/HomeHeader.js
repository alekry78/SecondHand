import React from 'react';
import {
    Anchor,
    Auth, Button, ButtonsContainer,
    Header,
    HeaderContainer,
    Hero,
    Image,
    Login,
    Navigation,
    Register,
    Section
} from "./HomeHeader.styles";
import HomeHero from '../../../assets/HomeHero.jpg'
import {Element} from 'react-scroll'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
const HomeHeader = () => {
    const handleSetActive = (to) => {
        console.log(to);
    }
    return(
        <Element name="Start">
            <Section>
                <Image src={HomeHero} alt="" />
                <Hero>
                    <Auth>
                        <Login to="/login">
                            Zaloguj
                        </Login>
                        <Register to="/register">
                            Załóż konto
                        </Register>
                    </Auth>
                    <Navigation>
                        <Anchor to="Start" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                            Start
                        </Anchor>
                        <Anchor to="Steps" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                            O co chodzi?
                        </Anchor>
                        <Anchor to="About" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                            O nas
                        </Anchor>
                        <Anchor to="test1" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                            Fundacja i organizacje
                        </Anchor>
                        <Anchor to="test1" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                            Kontakt
                        </Anchor>
                    </Navigation>
                    <HeaderContainer>
                        <Header>
                            Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce
                        </Header>
                        <Decoration />
                        <ButtonsContainer>
                            <Button to="/login">
                                Oddaj <br />rzeczy
                            </Button>
                            <Button to="/login">
                                Zorganizuj <br />zbiórkę
                            </Button>
                        </ButtonsContainer>
                    </HeaderContainer>
                </Hero>
            </Section>
        </Element>
    )
};

export default HomeHeader