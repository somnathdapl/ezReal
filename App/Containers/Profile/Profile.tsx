import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

// stylesheet
import { ProfileStyle } from './ProfileStyle';

interface Props {}
interface State {}

const ProfileScreen = (props: Props, state: State) => (
    <View style={ProfileStyle.container}>
        <Text>The app is in the Profile screen</Text>
    </View>
)

export default ProfileScreen;