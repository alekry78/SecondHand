import React from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Main} from "./Home.styles";
import HomeColumns from "./HomeColumns/HomeColumns";
import HomeEasySteps from "./HomeEasySteps/HomeEasySteps";
import HomeAbout from "./HomeAbout/HomeAbout";

const Home = () => {
    return(
      <Main>
          <HomeHeader />
          <HomeColumns />
          <HomeEasySteps />
          <HomeAbout />
      </Main>
    )
};

export default Home