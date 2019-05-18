import { all, takeLatest } from "redux-saga/effects";

import { UsersTypes } from "./users/types";
import { load } from "./users/sagas";

export default function* rootSaga() {
    return yield all([takeLatest(UsersTypes.LOAD_REQUEST, load)]);
}
