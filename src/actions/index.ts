import { Dispatch } from "redux";
import ActionTypes from "./types";
import axiosConfig from "../axiosConfig";

export interface UserStruc{
    username:string;
    password:string;
    id:number;
    plan:string;
}

export interface PhotoStruc{
    id:number;
    photoName:string;
    uid:number;
}

export interface VideoStruc{
    id:number;
    videoName:string;
    uid:number;
}

export interface LoginData{
    type:ActionTypes.loginUser;
    payload: UserStruc
}

export interface PhotoData{

    type:ActionTypes.fetchphotos;
    payload:PhotoStruc[]
}

export interface VideoData{
    type:ActionTypes.fetchVideos;
    payload:VideoStruc[]
}


export const login = (id:number,username:string,password:string,plan:string)=>{
    const action:LoginData = {
        type:ActionTypes.loginUser,
        payload:{username,password,id,plan}
    }
    return action
}

export const getPhotos = (userid:number)=>{
    return async (dispatch:Dispatch)=>{

        const response = await axiosConfig.get(`app/user/${userid}`)
        dispatch<PhotoData>({
            type: ActionTypes.fetchphotos,
            payload: response.data.photos
        })

    }
}

export const getVideos = (userid:number)=>{
    return async (dispatch:Dispatch)=>{

        const response = await axiosConfig.get(`app/user/${userid}`)
        dispatch<VideoData>({
            type: ActionTypes.fetchVideos,
            payload: response.data.videos
        })

    }
}