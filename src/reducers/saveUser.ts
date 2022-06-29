import ActionTypes from "../actions/types";
import { UserStruc, LoginData } from "../actions";

const defaultUserState = {
    username:'unknown',
    password:'unknown',
    id:0,
    plan:"unknown"
}


export const saveUser = (state:UserStruc=defaultUserState,action:LoginData)=>{

    switch(action.type){

        case ActionTypes.loginUser:
            return action.payload;
        default:
            return state;

    }
    
}