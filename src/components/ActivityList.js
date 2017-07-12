import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Card,
    CardItem,
    Thumbnail
} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import ActivityRow from './ActivityRow';
const logo = require('../img/smartTasks.png');

const activities = [
    {
        id: 1,
        name: 'First Activity',
        content: 'Here is the first activity'
    },
    {
        id: 2,
        name: 'Second Activity',
        content: 'Here is the second activity'
    },
    {
        id: 3,
        name: 'Third Activity',
        content: 'Here is the third activity'
    },
    {
        id: 4,
        name: 'Forth Activity',
        content: 'Here is the Forth activity'
    }
];

export default class ActivityList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {navigate} = this.props.navigation;
        const renderRow = () => {
            return activities.map((act) => {
                return(
                    <ActivityRow
                        name={act.name}
                        content={act.content}
                        navProp = {this.props.navigation}
                        nav = {act}
                        key={act.id}
                    />
                )
            })
        };
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} transparent>
                            <Icon ios='ios-menu' android="md-menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Grid>
                        <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Thumbnail square small source={require('../img/smartTasks.png')}/>
                            <Title>
                                SmartTasks
                            </Title>
                        </Row>
                    </Grid>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    {renderRow()}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});

