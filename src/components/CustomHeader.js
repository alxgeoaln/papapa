import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Thumbnail
} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';

export default class CustomHeader extends Component {
    render() {
        const rederButton = () => {
            if (!this.props.sideMenuComponent) {
                return (
                    <Button onPress={() => this.props.sideMenu.navigate('DrawerOpen')} transparent>
                        <Icon ios='ios-menu' android="md-menu"/>
                    </Button>
                )
            } else {
                return (
                    <Button onPress={() => this.props.sideMenu.navigate('ActivityList')} transparent>
                        <Icon ios='ios-arrow-back' android="md-arrow-back"/>
                    </Button>
                )
            }
        };
        return (
            <Header>
                <Left>
                    {rederButton()}
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
        );
    }
}

