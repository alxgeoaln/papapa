import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {Container, Content, Input, Item, Button, Text, Toast} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Alert extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Col size={3}>
                        <Text style={{color: '#fff', textAlign: "center", marginTop: 10,  alignSelf: 'flex-start'}}>{this.props.error}</Text>
                    </Col>
                    <Col size={1}>
                        <Button onPress={this.props.okButton} transparent light>
                            <Text>
                                OK
                            </Text>
                        </Button>
                    </Col>
                </Grid>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: height * 0.08,
        borderWidth: 3,
        borderColor: '#333',
        backgroundColor: '#333',
    }
});

