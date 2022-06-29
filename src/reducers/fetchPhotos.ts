import ActionTypes from "../actions/types";
import { PhotoData, PhotoStruc } from "../actions";


export const fetchPhotoReducer = (state:PhotoStruc[]=[],action:PhotoData)=>{

    switch(action.type){

        case ActionTypes.fetchphotos:
            return action.payload;
        default:
            return state;

    }

}