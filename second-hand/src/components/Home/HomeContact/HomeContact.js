import React from 'react';
import {Contact, Details, DetailsContainer, Form, FormContainer, Input, Label, Title} from "./HomeContact.styles";
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";
const HomeContact = () => {
    return(
        <Contact name="Contact">
            <FormContainer>
                <Title>
                    Skontaktuj się z nami
                </Title>
                <Decoration />
                <Form>
                    <Details>
                        <DetailsContainer>
                            <Label>
                                Wpisz swoje imię
                            </Label>
                            <Input type="text" placeholder="Olek" />
                        </DetailsContainer>
                        <DetailsContainer>
                            <Label>
                                Wpisz swój email
                            </Label>
                            <Input type="email" placeholder="krysaleksander1@gmail.com" />
                        </DetailsContainer>
                    </Details>
                </Form>
            </FormContainer>
        </Contact>
    )
};

export default HomeContact