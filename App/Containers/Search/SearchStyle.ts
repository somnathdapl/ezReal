import { StyleSheet } from 'react-native';

// global styles. TODO: move to mixins, functions etc
//import { container, centeredContainer } from '../../Theme/GlobalLayout';

export const SearchStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    mapView: {
        ...StyleSheet.absoluteFillObject,
    }
});