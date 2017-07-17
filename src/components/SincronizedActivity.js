import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CustomHeader from './CustomHeader';

export default class SincronizedActivity extends Component {
    state = {
        sideMenuComponent: true
    };

    render() {
        return (
            <Container>
                <CustomHeader
                    sideMenu={this.props.navigation}
                    sideMenuComponent={this.state.sideMenuComponent}
                />
                <Content padder>
                    <Text>Hello!</Text>
                </Content>
            </Container>
        );
    }
}

