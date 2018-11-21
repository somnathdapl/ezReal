import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

// stylesheet
import { MoreStyle } from './MoreStyle';

interface Props {}
interface State {}

const MoreScreen = (props: Props, state: State) => (
    <View style={MoreStyle.container}>
        <Text>The app is in the More screen</Text>
    </View>
)

export default MoreScreen;