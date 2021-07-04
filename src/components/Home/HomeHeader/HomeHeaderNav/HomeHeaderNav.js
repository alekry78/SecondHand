import React from 'react';
import {Anchor, Auth, Login, Navigation, Register} from "../HomeHeader.styles";

const HomeHeaderNav = () => {
    const handleSetActive = (to) => {
        console.log(to);
    }
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
              <Anchor to="Start" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                  Start
              </Anchor>
              <Anchor to="Steps" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                  O co chodzi?
              </Anchor>
              <Anchor to="About" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                  O nas
              </Anchor>
              <Anchor to="Help" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                  Fundacja i organizacje
              </Anchor>
              <Anchor to="Contact" activeClass="active" smooth={true} duration={500} offset={0} onSetActive={handleSetActive}>
                  Kontakt
              </Anchor>
          </Navigation>
      </>
    )
};

export default HomeHeaderNav