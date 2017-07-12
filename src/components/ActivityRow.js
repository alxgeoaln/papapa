import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text, Card, CardItem} from 'native-base';


export default class ActivityRow extends Component {

    render() {
        return (
            <Card style={{marginBottom: 15}}>
                <CardItem header>
                    <Text>{this.props.name}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        {this.props.content}
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Button onPress={() => this.props.navProp.navigate('ActivityDetails', this.props.nav)} primary><Text> Details </Text></Button>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({});

