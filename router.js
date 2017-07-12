import {AppRegistry} from 'react-native';
import {StackNavigator, DrawerNavigator, DrawerItems} from 'react-navigation'
import React, {Component} from 'react';
import {Button, Icon} from 'native-base';

import Login from './src/components/Login'
import ActivityList from './src/components/ActivityList';
import ActivityDetails from './src/components/ActivityDetails';
import Logout from './src/components/Logout';
import SincronizedActivity from  './src/components/SincronizedActivity';

const sideMenu = DrawerNavigator({
    ActivityList: {
        screen: ActivityList,
        navigationOptions: {
            headerStyle: {
                height: 0
            },
            drawerIcon: <Icon name="build"/>
        }
    },
    SincronizedActivities: {
        screen: SincronizedActivity,
        navigationOptions: {
            headerStyle: {
                height: 0
            },
            drawerIcon: <Icon ios="ios-cloud-done" android="md-cloud-done"/>
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#3F51B5'
            },
            drawerIcon: <Icon ios="ios-exit" android="md-exit"/>
        }
    }
});

const stackNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerStyle: {
                height: 0
            }
        }
    },
    main: {
        screen: sideMenu,
        navigationOptions: {
            title: 'SmartTasks',
            headerStyle: {
                height: 0
            }
        },
    },
    ActivityDetails: {
        screen: ActivityDetails,
        navigationOptions: {
            title: 'SmartTasks',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#3F51B5'
            }
        },
    }
});

export default stackNavigator;