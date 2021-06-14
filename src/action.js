import {GET_POST_LIST, GET_POST_LIST_SUCCESS} from './constant';

export const getPostList = (payload) => {
    return {
        type: GET_POST_LIST,
        payload,
    }
}

export const getPostListSuccess = (payload) => {
    return {
        type: GET_POST_LIST_SUCCESS,
        payload,
    }
}