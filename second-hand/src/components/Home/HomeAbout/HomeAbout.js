import React from 'react';
import {About, AboutContainer, Desc, Image, Title} from "./HomeAbout.styles";
import People from '../../../assets/People.jpg'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import Sign from "../../../assets/Signature.svg";

const HomeAbout = () => {
    return(
        <AboutContainer name="About" id="About">
            <About>
                <Title>
                    O nas
                </Title>
                <Decoration />
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea, eaque esse id itaque laboriosam minima nesciunt officia omnis quibusdam quidem rem saepe soluta voluptatibus.
                </Desc>
                <img src={Sign} alt="Podpis"/>
            </About>
            <Image src={People}/>

        </AboutContainer>
    )
};

export default HomeAbout