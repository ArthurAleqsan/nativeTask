import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, SafeAreaView, } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

const HomeRoute = () => {

    const renderHome = () => <HomeScreen />;
    
    return (<SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
            tabBarOptions={{ showLabel: false }}
        >
            <Tab.Screen
                name="Home"
                component={renderHome}
            />
        </Tab.Navigator>
    </SafeAreaView>)
};

export default HomeRoute;
