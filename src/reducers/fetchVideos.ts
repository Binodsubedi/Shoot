import ActionTypes from "../actions/types";
import { VideoData, VideoStruc } from "../actions";


export const fetchVideoReducer = (state:VideoStruc[]=[],action:VideoData)=>{

    switch(action.type){

        case ActionTypes.fetchVideos:
            return action.payload;
        default:
            return state;

    }

}