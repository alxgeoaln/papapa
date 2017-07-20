import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import {Container, Content, Input, Item, Button, Text, Toast} from 'native-base';
import ActivityList from './ActivityList';
import Alert from './Alert';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const user = {
    username: 'test',
    password: 'open'
};

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            showAlert: false
        }
    }

    login() {

        if(this.state.username !== user.username){
            this.setState({
                showAlert: true
            });
        } else {
            this.setState({
                showAlert: false
            });
            const {navigate} = this.props.navigation;
            navigate('main');
        }

    }

    alertOkButton() {
        this.setState({
            showAlert: false
        });
    }

    render() {
        const show = () => {
            if(this.state.showAlert){
                return(
                    <Alert
                        error={"Utilizator sau parola gresita"}
                        okButton={() => this.alertOkButton()}
                    />
                )
            }
        };


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
                    <Button onPress={() => this.login()} style={{marginTop: 10}} block primary>
                        <Text>Login</Text>
                    </Button>
                </Content>
                {show()}
            </Container>
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

