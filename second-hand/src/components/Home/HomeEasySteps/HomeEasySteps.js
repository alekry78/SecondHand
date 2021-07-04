import React from 'react';
import {Button, Desc, EasySteps, Line, SmallTitle, Step, Steps, Title} from "./HomeEasySteps.styles";
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import Icon1 from "../../../assets/Icon1.svg";
import Icon2 from "../../../assets/Icon2.svg";
import Icon3 from "../../../assets/Icon3.svg";
import Icon4 from "../../../assets/Icon4.svg";
const HomeEasySteps = () => {
    return (
        <EasySteps name="Steps" id="Steps">
            <Title>
                Wystarczą 4 proste kroki
            </Title>
            <Decoration/>
            <Steps>
                <Step>
                    <img src={Icon1} alt="Ikona 1"/>
                    <SmallTitle>
                        Wybierz rzeczy
                    </SmallTitle>
                    <Line />
                    <Desc>
                        ubrania,zabawki, <br/> sprzęt i inne
                    </Desc>
                </Step>
                <Step>
                    <img src={Icon2 } alt="Ikona 2"/>
                    <SmallTitle>
                        Spakuj je
                    </SmallTitle>
                    <Line/>
                    <Desc>
                        skorzystaj z <br/>worków na śmieci
                    </Desc>
                </Step>
                <Step>
                    <img src={Icon3 } alt="Ikona 3"/>
                    <SmallTitle>
                        Zdecyduj komu <br /> chcesz pomóc
                    </SmallTitle>
                    <Line/>
                    <Desc>
                        wybierz zaufane <br /> miejsce
                    </Desc>
                </Step>
                <Step>
                    <img src={Icon4 } alt="Ikona 4"/>
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