import { GET_POST_LIST, GET_POST_LIST_SUCCESS } from "./constant";

const INIT_STATE = {
    posts: [],
    load: false,
  };
  

const postsReducers = (state = INIT_STATE, action) =>{
    switch(action.type){
        case GET_POST_LIST:
            return{
                ...state,
                load: true
            };
        case GET_POST_LIST_SUCCESS:
            const {data} = action.payload;
            return{
                ...state,
                posts: data,
                load: false
            };
        default:
            return state;

    }
}

export default postsReducers;