import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Card, CardItem  } from 'native-base';


export default class ActivityRow extends Component {

    render() {
        return (
            <Container>
                <Content padder>
                    <Text>{this.props.navigation.state.params.content}</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

});

