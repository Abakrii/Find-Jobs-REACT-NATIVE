import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text , AsyncStorage} from 'react-native';
import {AppLoading} from 'expo';
import Slides from '../../components/Slides/Slides'

const SLIDE_DATA =[
    {text: 'welcome to Job App' , color:"#03A9F4"},
    {text :'Use this to get a job' , color: "#009688"},
    {text : 'Set your location , then swipe away' , color:"#03A9F4"}
];

class WelcomeScreen extends Component {
    state={token:null};

   async componentWillMount(){
      let token =  await AsyncStorage.getItem('fb_token');
       if(token){
           this.props.navigation.navigate('Map');
           this.setState({token})
       }else{
           this.setState({token : false})
       }

    }

    onSlideComplete=()=>{
        this.props.navigation.navigate('Auth');
    };

    render(){
        if(_.isNull(this.state.token)){
            return <AppLoading/>;
        }
        return(
           <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete}/>
        );
    }
}


export default WelcomeScreen;

