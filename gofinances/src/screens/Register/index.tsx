import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType
} from './styles';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { Modal } from 'react-native';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Forms/InputForm';
import { useForm } from 'react-hook-form';

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const { control, handleSubmit } = useForm();

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }

    function handleRegister(form: FormData) {
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log('data', data);
    }
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <InputForm
                        name={'name'}
                        control={control}
                        placeholder={'name'} />
                    <InputForm
                        name={'amount'}
                        control={control}
                        placeholder={'Preço'}
                    />
                    <TransactionsType>
                        <TransactionTypeButton type={'up'} title={'Income'} onPress={() => handleTransactionsTypeSelect('up')} isActive={transactionType === 'up'} />
                        <TransactionTypeButton type={'down'} title={'Outcome'} onPress={() => handleTransactionsTypeSelect('down')} isActive={transactionType === 'down'} />
                    </TransactionsType>
                    <CategorySelectButton title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>

                <Button title={'Enviar'}
                    onPress={handleSubmit(handleRegister)}
                />
            </Form>
            <Modal visible={categoryModalOpen}>
                <CategorySelect category={category} setCategory={setCategory} closeSelectCategory={handleCloseSelectCategoryModal} />
            </Modal>
        </Container>
    );
}