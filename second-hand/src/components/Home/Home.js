import React from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Main} from "./Home.styles";
import HomeColumns from "./HomeColumns/HomeColumns";
import HomeEasySteps from "./HomeEasySteps/HomeEasySteps";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomePages from "./HomePages/HomePages";
import HomeContact from "./HomeContact/HomeContact";

const Home = () => {
    return(
      <Main>
          <HomeHeader />
          <HomeColumns />
          <HomeEasySteps />
          <HomeAbout />
          <HomePages />
          <HomeContact />
      </Main>
    )
};

export default Home