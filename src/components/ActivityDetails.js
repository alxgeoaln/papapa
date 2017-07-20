import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    Container,
    Title,
    Content,
    Button,
    Text,
    Input,
    Item,
    Picker,
    Card,
    CardItem,
    Body,
    CheckBox,
    Form
} from 'native-base';
import CustomHeader from './CustomHeader';

export default class ActivityRow extends Component {
    state = {
        sideMenuComponent: true,
        registryStatus: '',
        serviceJurnal: '',
        sendEmail: false
    };

    registryStatus(value: string) {
        this.setState({
            registryStatus: value
        });
    }

    jurnalStatus(value: string) {
        this.setState({
            serviceJurnal: value
        });
    }

    sendEmail() {
        this.setState({
            sendEmail: !this.state.sendEmail
        });
    }

    render() {
        return (
            <Container>
                <CustomHeader
                    sideMenuComponent={this.state.sideMenuComponent}
                    sideMenu={this.props.navigation}
                />
                <Content padder>
                    <Text>{this.props.navigation.state.params.content}</Text>
                    <Form>
                        <Text style={{marginTop: 10}}>Marca:</Text>
                        <Item regular>
                            <Input placeholder="Marca echipament"/>
                        </Item>
                        <Text style={{marginTop: 10}}>Model:</Text>
                        <Item regular>
                            <Input placeholder="Model echipament"/>
                        </Item>
                        <View style={{marginTop: 10, borderTopWidth: 3}}></View>
                        <Text style={{marginTop: 10}}>Completarea registrului de control:</Text>
                        <Picker
                            mode="dropdown"
                            iosHeader="Alege status registru"
                            placeholder="Alege status registru"
                            selectedValue={this.state.registryStatus}
                            onValueChange={this.registryStatus.bind(this)}
                        >
                            <Item label="Wallet" value="key0"/>
                            <Item label="ATM Card" value="key1"/>
                            <Item label="Debit Card" value="key2"/>
                            <Item label="Credit Card" value="key3"/>
                            <Item label="Net Banking" value="key4"/>
                        </Picker>

                        <Text>Completarea jurnalului de service:</Text>
                        <Picker
                            mode="dropdown"
                            placeholder="Alege status jurnal"
                            iosHeader="Alege status jurnal"
                            selectedValue={this.state.serviceJurnal}
                            onValueChange={this.jurnalStatus.bind(this)}
                        >
                            <Item label="Wallet" value="key0"/>
                            <Item label="ATM Card" value="key1"/>
                            <Item label="Debit Card" value="key2"/>
                            <Item label="Credit Card" value="key3"/>
                            <Item label="Net Banking" value="key4"/>
                        </Picker>
                        <View style={{marginTop: 10, borderTopWidth: 3}}></View>
                        <Card style={{marginTop: 10}}>
                            <CardItem>
                                <CheckBox checked={this.state.sendEmail} onPress={() => this.sendEmail()}/>
                                <Body>
                                <Text style={{marginLeft: 20}}>
                                    Trimite email
                                </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Button block style={{marginTop: 5}}>
                            <Text>Salveaza si inchide activitatea</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({});

