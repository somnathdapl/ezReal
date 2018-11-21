import React from 'react';
import { Component } from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// stylesheet
import { SearchStyle } from './SearchStyle';

// interfaces
interface Props {}
interface State {}

class SearchScreen extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    static navigationOptions = {
        headerLeft: <Button title='List' onPress={() => console.log('list')}/>,
        headerTitle: <Text>Search Screen</Text>,
        headerRight: <Button title='Filter' onPress={() => console.log('filter')}/>
    };

    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={[SearchStyle.container, SearchStyle.mapView]}
            />
            // <View style={SearchStyle.container}>
            //     <Text>This is Search screen</Text>
            // </View>
        )
    }
}

export default SearchScreen;