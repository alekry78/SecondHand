import React from 'react';
import {Column, Columns, Counter, Desc, Title} from "./HomeColumns.styles";
const HomeColumns = () => {
    return(
            <Columns id="Columns">
                <Column>
                    <Counter>
                        10
                    </Counter>
                    <Title>
                        Oddanych worków
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore, expedita quis repellat sapiente voluptatem?
                    </Desc>
                </Column>
                <Column>
                    <Counter>
                        5
                    </Counter>
                    <Title>
                        Wspartych organizacji
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore, expedita quis repellat sapiente voluptatem?
                    </Desc>
                </Column>
                <Column>
                    <Counter>
                        7
                    </Counter>
                    <Title>
                        Zorganizowanych zbiórek
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolore, expedita quis repellat sapiente voluptatem?
                    </Desc>
                </Column>
            </Columns>
    )
};

export default HomeColumns