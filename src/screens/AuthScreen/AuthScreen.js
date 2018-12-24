import React, {Component} from 'react';
import {View, Text , AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin();
        AsyncStorage.removeItem('fb_token');
    }
    render(){
        return(
            <View>
                <Text>
                Auth Screen
                </Text>
            </View>
        );
    }
}


export default connect(null , actions) (AuthScreen);

