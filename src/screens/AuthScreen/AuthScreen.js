import React, {Component} from 'react';
import {View, Text , AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin();
        this.onAuthComplelte(this.props);
        //remove token and logout
       // AsyncStorage.removeItem('fb_token')
    }
    componentWillReceiveProps(nextProps){
        this.onAuthComplelte(nextProps);
    }

    onAuthComplelte = (props) =>{
        if(props.token){
            this.props.navigation.navigate('Map');
        }
    };
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

function mapStateToProps({auth}) {
    return {token: auth.token}
}

export default connect(mapStateToProps , actions) (AuthScreen);

