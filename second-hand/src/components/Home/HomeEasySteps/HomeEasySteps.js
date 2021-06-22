import React from 'react';
import {Element} from 'react-scroll'
import {Button, Desc, EasySteps, Line, SmallTitle, Step, Steps, Title} from "./HomeEasySteps.styles";
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import {ReactComponent as Shirt} from "../../../assets/Icon1.svg";
import {ReactComponent as Bag} from "../../../assets/Icon2.svg";
import {ReactComponent as Search} from "../../../assets/Icon3.svg";
import {ReactComponent as Transport} from "../../../assets/Icon4.svg";


const HomeEasySteps = () => {
    return (
        <EasySteps name="Steps">
            <Title>
                Wystarczą 4 proste kroki
            </Title>
            <Decoration/>
            <Steps>
                <Step>
                    <Shirt />
                    <SmallTitle>
                        Wybierz rzeczy
                    </SmallTitle>
                    <Line />
                    <Desc>
                        ubrania,zabawki, <br/> sprzęt i inne
                    </Desc>
                </Step>
                <Step>
                    <Bag />
                    <SmallTitle>
                        Spakuj je
                    </SmallTitle>
                    <Line/>
                    <Desc>
                        skorzystaj z <br/>worków na śmieci
                    </Desc>
                </Step>
                <Step>
                    <Search />
                    <SmallTitle>
                        Zdecyduj komu <br /> chcesz pomóc
                    </SmallTitle>
                    <Line/>
                    <Desc>
                        wybierz zaufane <br /> miejsce
                    </Desc>
                </Step>
                <Step>
                    <Transport />
                    <SmallTitle>
                        Zamów kuriera
                    </SmallTitle>
                    <Line />
                    <Desc>
                       kurier przyjedzie <br/> w dogodnym terminie
                    </Desc>
                </Step>
            </Steps>
            <Button to="/login">
                Oddaj <br/> Rzeczy
            </Button>
        </EasySteps>
    )
};

export default HomeEasySteps