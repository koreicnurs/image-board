import {
    CREATE_IMAGEBOARD_FAILURE,
    CREATE_IMAGEBOARD_REQUEST, CREATE_IMAGEBOARD_SUCCESS,
    FETCH_IMAGEBOARDS_FAILURE,
    FETCH_IMAGEBOARDS_REQUEST,
    FETCH_IMAGEBOARDS_SUCCESS
} from "../actions/imageBoardActions";


const initialState = {
    boards: [],
    loading: false,
    error: null,
};

const productsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_IMAGEBOARDS_REQUEST:
            return {...state, loading: true};
        case FETCH_IMAGEBOARDS_SUCCESS:
            return {...state, loading: false, boards: actions.payload};
        case FETCH_IMAGEBOARDS_FAILURE:
            return {...state, loading: false, error: actions.payload};

        case CREATE_IMAGEBOARD_REQUEST:
            return {...state, loading: true};
        case CREATE_IMAGEBOARD_SUCCESS:
            return {...state, loading: false};
        case CREATE_IMAGEBOARD_FAILURE:
            return {...state, loading: false, error: actions.payload};
        default:
            return state;
    }
};

export default productsReducer;