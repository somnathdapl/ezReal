import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

// stylesheet
import { HomesStyle } from './HomesStyle';

interface Props {};
interface State {};

const HomeScreen = (props: Props, state: State) => (
    <View style={HomesStyle.container}>
        <Text>This is Saved Homes screen</Text>
    </View>
)

export default HomeScreen;