/**
 *  Action types
 */
export enum UsersTypes {
    LOAD_REQUEST = "@users/LOAD_REQUEST",
    LOAD_SUCCESS = "@users/LOAD_SUCCESS",
    LOAD_FAILURE = "@users/LOAD_FAILURE"
}

/**
 * Data types
 */
export interface User {
    _id: string;
    name: string;
    contact: string;
}

/**
 * State types
 */
export interface UsersState {
    readonly data: User[];
    readonly loading: boolean;
    readonly error: boolean;
}
