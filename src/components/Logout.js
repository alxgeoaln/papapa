import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail} from 'native-base';
import ActivityRow from './ActivityRow';
const logo = require('../img/smartTasks.png');

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.navigation.navigate('Login')
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Text>Logout</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});

