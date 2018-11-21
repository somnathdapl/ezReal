
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import SearchScreen from './Search/Search';
import UpdateScreen from './Update/Update';
import HomesScreen from './Homes/Homes';
import ProfileScreen from './Profile/Profile';
import MoreScreen from './More/More';

// create stack navigator object for `Search` screen
const SearchStack = createStackNavigator({
    Search: SearchScreen,
});

// create stack navigator object for `Update` screen
const UpdateStack = createStackNavigator({
    Update: UpdateScreen,
});

// create stack navigator object for `Homes` screen
const HomesStack = createStackNavigator({
    Homes: HomesScreen,
});
// create stack navigator object for `Profile` screen
const ProfileStack = createStackNavigator({
    Ptrofile: ProfileScreen,
});

// create stack navigator object for `More` screen
const MoreStack = createStackNavigator({
    More: MoreScreen,
});

// create tab navigator object
const TabNavigator = createBottomTabNavigator(
    {
        //Search: SearchScreen,
        //Update: UpdateScreen,
        //Homes: HomesScreen,
        //Profile: ProfileScreen,
        //More: MoreScreen
        Search: SearchStack,
        Update: UpdateStack,
        Homes: HomesStack,
        Profile: ProfileStack,
        More: MoreStack
    }, 
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                if (routeName === 'Search') {
                  iconName = 'ios-search';
                } else if (routeName === 'Update') {
                  iconName = 'ios-information-circle';
                }
                else if (routeName === 'Homes') {
                    iconName = 'ios-home';
                }
                else if (routeName === 'Profile') {
                    iconName = 'ios-contact';
                }
                else if (routeName === 'More') {
                    iconName = 'ios-more';
                }
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
              },
        }),
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray'
        }
    }
);

// create the navigation container now (new in v3)
export default createAppContainer(TabNavigator);