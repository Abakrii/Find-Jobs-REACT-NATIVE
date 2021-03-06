import React, {Component} from 'react';
import {View, Text , Platform } from 'react-native';
import {Button} from 'react-native-elements';
class ReviewScreen extends Component {
    // static navigationOptions ={
    //     return {
    //     title : 'Review Jobs',
    //     header : ({navigate})=>{
    //
    //             headerRight :(
    //                 <Button
    //                     title="Setting"
    //                     onPress={()=>navigate("Settings")}
    //                 />
    //             )
    //         };
    //     }
    // };
    static navigationOptions = ({ navigation   }) => {
        return {
            title: 'Review Jobs',
            headerRight:
                <Button title="Setting"
                        onPress={()=>{ navigation.navigate('Settings'); }}
                        backgroundColor = "rgba(0,0,0,0)"
                        color ="rgba(0,122,255,1)"
                />,
            headerTitleStyle: {
                marginTop : Platform.OS === 'android' ? 24:0
            },

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

