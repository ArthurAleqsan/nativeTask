import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, Text } from 'react-native';
import HomeRoute from './HomeRoute';

const Stack = createStackNavigator();

const Router = () => {

    // const renderHome = () => <View><Text>9999</Text></View>;
    const renderHome = () => <HomeRoute />;
    return (
        <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen
                        name='Home'
                        component={renderHome}
                    />
                </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Router;
