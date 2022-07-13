import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container } from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string; //To differentiate inside form
}

export function InputForm({
    control,
    name,
    ...rest
}: Props) {
    return (
        <Container>
            {/* Controlling input to not have unnecessary rendering. */}
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            >
            </Controller>
        </Container>
    )
}