import React, {useState} from 'react';
import {Container, Foundation, Foundations, Title} from "./HomePages.styles";
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
import HomePagesFound from "./HomePagesFound";
import HomePagesOrganizations from "./HomePagesOrganizations";
import HomePagesLocal from "./HomePagesLocal";
const HomePages = () => {
    const[active,setActive]=useState(1);
    const handleToggleClass = (num) =>{
        setActive(num);
    }
    return(
        <Container name="Help">
            <Title>
              Komu pomagamy?
            </Title>
            <Decoration />
            <Foundations>
                <Foundation onClick={()=>handleToggleClass(1)} className={active === 1 ? 'active' : null}>
                    Fundacjom
                </Foundation>
                <Foundation onClick={()=>handleToggleClass(2)} className={active === 2 ? 'active' : null}>
                    Organizacjom<br/> pozarządowym
                </Foundation>
                <Foundation onClick={()=>handleToggleClass(3)} className={active === 3 ? 'active' : null}>
                    Lokalnym<br/>zbiórkom
                </Foundation>
            </Foundations>
            {active === 1 ? <HomePagesFound /> : null}
            {active === 2 ? <HomePagesOrganizations /> : null}
            {active === 3 ? <HomePagesLocal /> : null}
        </Container>
    )
};

export default HomePages