import React, {useState} from 'react';
import {
    Desc,
    HelpContainer,
    NameContainer,
    Organization,
    OrganizationDesc,
    OrganizationName,
    Organizations, Page, Pages, Stuff
} from "./HomePages.styles";
const HomePagesOrganizations = () => {
    const[active,setActive]=useState(1);
    const handleToggleClass = (num) =>{
        setActive(num);
    }
    return(
        <HelpContainer>
            {active === 1 ? <>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque ducimus est sit sunt veritatis! Assumenda dolores quia quidem soluta!
                </Desc>
                <Organizations>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Dbam o Zdrowie"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            ubrania, jedzenie, sprzęt AGD, meble, zabawki
                        </Stuff>
                    </Organization>
                    <Organization className="middle">
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Dla dzieci"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Pomoc dzieciom z ubogich rodzin.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            ubrania, meble, zabawki
                        </Stuff>
                    </Organization>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Bez domu"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            ubrania, jedzenie, ciepłe koce
                        </Stuff>
                    </Organization>
                </Organizations>
            </> : null }
            {active === 2 ? <>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur dolor, fugit laborum molestias mollitia placeat sapiente unde voluptatem voluptates!
                </Desc>
                <Organizations>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Lorem Ipsum"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            Lorem ipsum dolor sit amet.
                        </Stuff>
                    </Organization>
                    <Organization className="middle">
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Lorem Ipsum"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            Lorem ipsum dolor sit amet.
                        </Stuff>
                    </Organization>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Lorem Ipsum"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            Lorem ipsum dolor sit amet.
                        </Stuff>
                    </Organization>
                </Organizations>
            </> : null }
            {active === 3 ? <>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur dolor, fugit laborum molestias mollitia placeat sapiente unde voluptatem voluptates!
                </Desc>
                <Organizations>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Lorem Ipsum"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            Lorem ipsum dolor sit amet.
                        </Stuff>
                    </Organization>
                    <Organization className="middle">
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Lorem Ipsum"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            Lorem ipsum dolor sit amet.
                        </Stuff>
                    </Organization>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Organizacja "Lorem Ipsum"
                            </OrganizationName>
                            <OrganizationDesc>
                                Cel i misja: Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </OrganizationDesc>
                        </NameContainer>
                        <Stuff>
                            Lorem ipsum dolor sit amet.
                        </Stuff>
                    </Organization>
                </Organizations>
            </> : null }
            <Pages>
                <Page onClick={()=>handleToggleClass(1)} className={active === 1 ? 'active' : null}>
                    1
                </Page>
                <Page onClick={()=>handleToggleClass(2)} className={active === 2 ? 'active' : null}>
                    2
                </Page>
                <Page onClick={()=>handleToggleClass(3)} className={active === 3 ? 'active' : null}>
                    3
                </Page>
            </Pages>
        </HelpContainer>
    )
};

export default HomePagesOrganizations