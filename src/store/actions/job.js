import axios from 'axios';
import reverseGecod from "latlang-to-zip";
import qs from 'qs';
import {FETCH_JOBS} from './types';


const JOB_QUERY_PARAMS ={
    publisher :'4201738803816157',
    format : 'json',
    v:'2',
    latlong:1,
    radius:10,
    q:'javascript'
    



};

export const getJobs =(region)=> async (dispatch)=>{
    try {
        let zipCode = await reverseGecod(region);
    }catch (e){
        console.log(e);
    }
};