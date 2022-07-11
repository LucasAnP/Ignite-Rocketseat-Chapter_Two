import React from 'react';
import { Amount, Category, CategoryName, Container, Date, Footer, Icon, Title } from './styles';


export function TransactionCard() {
    return (
        <Container>
            <Title>Desenvolvimento de Site</Title>

            <Amount>R$ 12.000,00</Amount>

            <Footer>
                <Category>
                    <Icon name={"dollar-sign"} />
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>10/07/2022</Date>
            </Footer>
        </Container>
    )
}