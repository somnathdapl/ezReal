import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

// stylesheet
import { UpdateStyle } from './UpdateStyle';

interface Props {}
interface State {}

const UpdateScreen = (props: Props, state: State) => (
    <View style={UpdateStyle.container}>
        <Text>The app is in the Update screen</Text>
    </View>
)

export default UpdateScreen;