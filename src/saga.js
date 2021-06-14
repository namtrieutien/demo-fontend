import { call, put, takeLatest } from 'redux-saga/effects';
import {getPostData} from './postAPI';
import {getPostListSuccess} from './action';

function* getPostListSaga(action) {
    try {
        const data = yield call(getPostData);
        yield put(getPostListSuccess(data));
    } catch (error) {
        //handle error
    }
}

function* postsSaga() {
    yield takeLatest('GET_POST_LIST', getPostListSaga);
}

export default postsSaga;