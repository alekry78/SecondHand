import React from 'react';
import {Button, Desc, EasySteps, Line, SmallTitle, Step, Steps, Title} from "./HomeEasySteps.styles";
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import {ReactComponent as Icon1} from "../../../assets/Icon1.svg";
import {ReactComponent as Icon2} from "../../../assets/Icon2.svg";
import {ReactComponent as Icon3} from "../../../assets/Icon3.svg";
import {ReactComponent as Icon4} from "../../../assets/Icon4.svg";
const HomeEasySteps = () => {
    return (
        <EasySteps name="Steps">
            <Title>
                Wystarczą 4 proste kroki
            </Title>
            <Decoration/>
            <Steps>
                <Step>
                    <Icon1 />
                    <SmallTitle>
                        Wybierz rzeczy
                    </SmallTitle>
                    <Line />
                    <Desc>
                        ubrania,zabawki, <br/> sprzęt i inne
                    </Desc>
                </Step>
                <Step>
                    <Icon2 />
                    <SmallTitle>
                        Spakuj je
                    </SmallTitle>
                    <Line/>
                    <Desc>
                        skorzystaj z <br/>worków na śmieci
                    </Desc>
                </Step>
                <Step>
                    <Icon3 />
                    <SmallTitle>
                        Zdecyduj komu <br /> chcesz pomóc
                    </SmallTitle>
                    <Line/>
                    <Desc>
                        wybierz zaufane <br /> miejsce
                    </Desc>
                </Step>
                <Step>
                    <Icon4 />
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