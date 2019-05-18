import { Reducer } from "redux";
import { UsersState, UsersTypes } from "./types";

const INITIAL_STATE: UsersState = {
    data: [],
    error: false,
    loading: false
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case UsersTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload.data
            };
        case UsersTypes.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: []
            };
        case UsersTypes.REMOVE_ITEM:
            return {
                ...state,
                loading: false,
                error: false,
                data: state.data.filter(item => item._id !== action.payload._id)
            };
        default:
            return state;
    }
};

export default reducer;
