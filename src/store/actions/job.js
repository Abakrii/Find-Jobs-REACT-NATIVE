import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import {FETCH_JOBS} from './types';


const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
};

//convert langtiude and latitude to zip code
const buildJobsUrl =(zip)=>{
  const query = qs.stringify({...JOB_QUERY_PARAMS , l:zip});

    //append {query} to {job_root_url}
    return `${JOB_ROOT_URL}${query}`;
};

export const getJobs =(region)=> async (dispatch)=>{
    try {
        let zipCode = await reverseGeocode(region);
        const url = buildJobsUrl(zipCode);
        let {data} = await axios.get(url);
        dispatch({type : FETCH_JOBS , payload: data});
        console.log("dataasdasdasdasdasd :" ,data);

    }catch (e){
        console.log("error not apper",e);
    }
};