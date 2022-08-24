import axiosApi from "../../axiosApi";

export const FETCH_IMAGEBOARDS_REQUEST = 'FETCH_IMAGEBOARDS_REQUEST';
export const FETCH_IMAGEBOARDS_SUCCESS = 'FETCH_IMAGEBOARDS_SUCCESS';
export const FETCH_IMAGEBOARDS_FAILURE = 'FETCH_IMAGEBOARDS_FAILURE';

export const CREATE_IMAGEBOARD_REQUEST = 'CREATE_IMAGEBOARD_REQUEST';
export const CREATE_IMAGEBOARD_SUCCESS = 'CREATE_IMAGEBOARD_SUCCESS';
export const CREATE_IMAGEBOARD_FAILURE = 'CREATE_IMAGEBOARD_FAILURE';

const fetchImageBoardsRequest = () => ({type: FETCH_IMAGEBOARDS_REQUEST});
const fetchImageBoardsSuccess = imageBoards => ({type: FETCH_IMAGEBOARDS_SUCCESS, payload: imageBoards});
const fetchImageBoardsFailure = error => ({type: FETCH_IMAGEBOARDS_FAILURE, payload: error});

const createImageBoardRequest = () => ({type: CREATE_IMAGEBOARD_REQUEST});
const createImageBoardSuccess = () => ({type: CREATE_IMAGEBOARD_SUCCESS});
const createImageBoardFailure = error => ({type: CREATE_IMAGEBOARD_FAILURE, payload: error});

export const getImageBoards = () => {
    return async dispatch => {
        try {
            dispatch(fetchImageBoardsRequest());

            const response = await axiosApi('/board');

            dispatch(fetchImageBoardsSuccess(response.data));
        } catch (e) {
            dispatch(fetchImageBoardsFailure(e.message));
        }
    }
};

export const createImageBoard = (boardData) => {
    return async dispatch => {
        try {
            dispatch(createImageBoardRequest());
            await axiosApi.post('/board', boardData);
            dispatch(createImageBoardSuccess());
        } catch (e) {
            dispatch(createImageBoardFailure(e.message));
            throw e;
        }
    }
};