import {FACEBOOK_LOGIN_SUCCESS , FACEBOOK_LOGIN_Fail} from '../actions/types';


export default function (state={} , action) {
    switch (action.type){
        case FACEBOOK_LOGIN_SUCCESS:
            return {token: action.payload};
        case FACEBOOK_LOGIN_Fail:
            return {token: null};
        default:
            return state;
    }
}