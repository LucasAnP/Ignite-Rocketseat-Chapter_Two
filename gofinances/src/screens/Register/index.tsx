import React from 'react';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Input/Button';
import {
    Container,
    Header,
    Title,
    Form,
    Fields
} from './styles';

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder={'name'} />
                    <Input placeholder={'Preço'} />
                </Fields>

                <Button title={'Enviar'} />
            </Form>
        </Container>
    );
}