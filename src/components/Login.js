import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import {Container, Content, Input, Item, Button, Text, Toast} from 'native-base';
import ActivityList from './ActivityList';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isLoggedIn: false
        }
    }

    login() {
        const username = this.state.username;
        const password = this.state.password;

        if (username || password == "") {
            Toast.show({
                text: 'Ambele campuri sunt obligatorii',
                position: 'bottom',
                duration: 2000,
                type: 'danger'
            });
        } else {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderView = () => {
            if (this.state.isLoggedIn) {
                return (
                    <ActivityList/>
                )

            } else {
                return (


                    <Container>
                        <Content padder>
                            <Image style={styles.logo} source={require('../img/smartTasksAvitech.jpg')}/>

                            <Item regular style={{marginTop: 10}}>
                                <Input onChangeText={(username) => {
                                    this.setState({username: username})
                                }} placeholder='Username'/>
                            </Item>
                            <Item style={{marginTop: 10}} regular>
                                <Input
                                    secureTextEntry={true}
                                    onChangeText={(password) => {
                                        this.setState({password: password})
                                    }} placeholder='Password'/>
                            </Item>
                            <Button onPress={() => navigate('main')} style={{marginTop: 10}} block primary>
                                <Text>Login</Text>
                            </Button>
                        </Content>
                    </Container>
                )
            }
        }
        return (
            <View style={{flex: 1}}>
                {renderView()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    logo: {
        marginTop: height * .20,
        height: 100,
        width: width
    }
});
