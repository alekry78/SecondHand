import React from 'react';
import {
    Desc,
    HelpContainer,
    NameContainer,
    Organization,
    OrganizationDesc,
    OrganizationName,
    Organizations, Stuff
} from "./HomePages.styles";
const HomePagesLocal = () => {
    return(
        <HelpContainer>
                <Desc>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </Desc>
                <Organizations>
                    <Organization>
                        <NameContainer>
                            <OrganizationName>
                                Zbiórka "Dbam o Zdrowie"
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
                                Zbiórka "Dla dzieci"
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
                                Zbiórka "Bez domu"
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
        </HelpContainer>
    )
};

export default HomePagesLocal