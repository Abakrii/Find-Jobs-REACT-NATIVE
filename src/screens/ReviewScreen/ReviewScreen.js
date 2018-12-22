import React, {Component} from 'react';
import {View, Text , Button} from 'react-native';
class ReviewScreen extends Component {
    static navigationOptions ={
        title : 'Review Jobs',
        header : ({navigate})=>{
            return {
                right : <Button title="Setting" onPress={()=>navigate("Settings")}/>
            }
        }
    };
    render(){
        return(
            <View>
                <Text>
                    Review Screen
                </Text>
            </View>
        );
    }
}


export default ReviewScreen;

