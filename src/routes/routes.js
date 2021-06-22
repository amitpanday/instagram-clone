import React from 'react';
import 'react-native-gesture-handler';
import { Dimensions, Image, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screen/appScreen/home';
import Search from '../screen/appScreen/search';
import Reels from '../screen/appScreen/reels';
import Notification from '../screen/appScreen/notification';
import Profile from '../screen/appScreen/profile';

const RootStack = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer>
            <TabNavigator.Navigator initialRouteName="Home">
                <TabNavigator.Screen name="Home" component={Home}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: focused ? '#ed1909' : '#000000',
                                    width: 32, height: 32,
                                }}
                                resizeMode={'contain'}
                                source={require('../assets/home.png')}
                            />
                        )
                    }}
                />
                <TabNavigator.Screen name="Search" component={Search}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: focused ? '#ed1909' : '#000000',
                                    width: 32, height: 32,
                                }}
                                resizeMode={'contain'}
                                source={require('../assets/search.png')}
                            />
                        )
                    }}
                />
                <TabNavigator.Screen name="Reels" component={Reels}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: focused ? '#ed1909' : '#000000',
                                    width: 32, height: 32,
                                }}
                                resizeMode={'contain'}
                                source={require('../assets/reels.png')}
                            />
                        )
                    }}
                />
                <TabNavigator.Screen name="Notification" component={Notification}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                style={{
                                    alignSelf: 'center',
                                    tintColor: focused ? '#ed1909' : '#000000',
                                    width: 32, height: 32,
                                }}
                                resizeMode={'contain'}
                                source={require('../assets/notification.png')}
                            />
                        )
                    }}
                />
                <TabNavigator.Screen name="Profile" component={Profile}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused, color, size }) => (
                            <Image
                                style={{
                                    alignSelf: 'center', width: 32, height: 32
                                }}
                                resizeMode={'contain'}
                                source={require('../assets/default_user.png')}
                            />
                        )
                    }}
                />
            </TabNavigator.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;