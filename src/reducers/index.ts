import { combineReducers } from "redux";
import { saveUser } from "./saveUser";
import { fetchVideoReducer } from "./fetchVideos";
import { fetchPhotoReducer } from "./fetchPhotos";
import { UserStruc, PhotoStruc, VideoStruc } from "../actions";

export interface StoreState{
    loggedinUser:UserStruc,
    photos:PhotoStruc[],
    videos:VideoStruc[]
}

export const reducers = combineReducers<StoreState>({
    loggedinUser:saveUser,
    photos:fetchPhotoReducer,
    videos:fetchVideoReducer
})