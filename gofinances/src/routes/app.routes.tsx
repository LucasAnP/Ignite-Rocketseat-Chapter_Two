import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator screenOptions={{
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            style: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 88
            }
        }}>
            <Screen name={"Listagem"} component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name={"format-list-bulleted"}
                            size={size} color={color} />
                    ))
                }}

            />
            <Screen name={"Cadastrar"} component={Register}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name={"attach-money"}
                            size={size} color={color} />
                    ))
                }}
            />
            <Screen name={"Resumo"} component={Register}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name={"pie-chart"}
                            size={size} color={color} />
                    ))
                }}
            />
        </Navigator>
    )
}