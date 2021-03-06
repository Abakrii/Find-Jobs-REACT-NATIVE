import {AsyncStorage} from 'react-native';
import {
FACEBOOK_LOGIN_SUCCESS , FACEBOOK_LOGIN_Fail
} from './types';

import {Facebook} from 'expo';

//How to use AsyncStorage
//AsyncStorage.setItem('fb_token , token);
//AsyncStorage.getItem('fb_token , token);

export const facebookLogin = ()=> async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');

    if(token){
        // Dispatch an action saying fb login done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS , payload : token});
    }else{
        // Start fb login process
        doFacebookLogin(dispatch);
    }

};

const doFacebookLogin = async dispatch=>{
    //376846596398452 = app ID in facebook developer app name = jobs
    let {type , token} = await Facebook.logInWithReadPermissionsAsync('376846596398452',{
        permissions :['public_profile']
    });

    if(type==='cancel'){
        return dispatch ({type:FACEBOOK_LOGIN_Fail})
    }
   await AsyncStorage.setItem('fb_token' , token);
    dispatch({type: FACEBOOK_LOGIN_SUCCESS , payload: token });
    

};

