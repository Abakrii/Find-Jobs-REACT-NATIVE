import React, {Component} from 'react';
import {View, Text , AsyncStorage , Button} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class AuthScreen extends Component {

    componentDidMount=()=>{
        //to show facebook login UI
        // this.props.facebookLogin();

         this.onAuthComplelte(this.props);
    };

    // This function called to run the navigation by passing next props if we loged in facebook
    componentWillReceiveProps(nextProps){
        this.onAuthComplelte(nextProps);
    };

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
                <Button
                    title="facebook login"
                    onPress={this.props.facebookLogin}
                />
            </View>
        );
    }
}

function mapStateToProps({auth}) {
    
    return {token: auth.token}
    
}

export default connect(mapStateToProps , actions) (AuthScreen);

