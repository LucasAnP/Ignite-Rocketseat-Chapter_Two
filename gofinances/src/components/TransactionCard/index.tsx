import React from 'react';
import { Amount, Category, CategoryName, Container, Date, Footer, Icon, Title } from './styles';

interface CategoryProps {
    name: string;
    icon: string;
}
interface Data {
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
}
interface Props {
    data: Data;
}

export function TransactionCard({ data }: Props) {
    return (
        <Container>
            <Title>{data.title}</Title>

            <Amount>{data.amount}</Amount>

            <Footer>
                <Category>
                    <Icon name={"dollar-sign"} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}