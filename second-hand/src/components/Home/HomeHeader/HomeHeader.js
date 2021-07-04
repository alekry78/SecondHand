import React from 'react';
import {
    Button, ButtonsContainer,
    Header,
    HeaderContainer,
    Hero,
    Image,
    Section
} from "./HomeHeader.styles";
import HomeHero from '../../../assets/HomeHero.jpg'
import {Element} from 'react-scroll'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import HomeHeaderNav from "./HomeHeaderNav/HomeHeaderNav";
const HomeHeader = () => {
    return(
        <Element name="Start" id="Start">
            <Section>
                <Image src={HomeHero} alt="" />
                <Hero>
                    <HomeHeaderNav />
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