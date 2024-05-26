/* import { useState } from 'react';
import { Container } from './styles';
import { Input } from '../../components/Input/intex'; */

import { Button } from "../../components/Button/intex"
import { ItemList } from "../../components/ItemList/intex"
import { BoxButton, Container, HeaderContent, LeftHeader, ListPointsContent, RightHeader, TimerContent } from "./styles"


export const PointRegister = () => {


    return(
        <Container>
            <HeaderContent>
                <LeftHeader>
                    <h1 className="labelCodeUser">Relógio de ponto</h1>
                </LeftHeader>

                <RightHeader>
                    <h1 className="labelCodeUser">#4SXXFMF</h1>
                    <h1 className="labelTextUser">Usuário</h1>
                </RightHeader>
            </HeaderContent>

            <TimerContent>
                <h1 className="labelHour">0h 00m</h1>
                <h1>Horas de hoje</h1>
            </TimerContent>

            <BoxButton>
                <Button
                    title="Hora de entrada"
                />
            </BoxButton>

            <ListPointsContent>
                <h1>Dias anteriores</h1>
                <ItemList 
                    date="03/11/23"
                    hours="7h 30m"
                />
                <ItemList 
                    date="04/11/23"
                    hours="7h 32m"
                />
                <ItemList 
                    date="05/11/23"
                    hours="7h 35m"
                />


            </ListPointsContent>
        </Container>
    )

}