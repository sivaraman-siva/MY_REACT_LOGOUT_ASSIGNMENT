import { put, takeLatest } from "redux-saga/effects";
import { UserLogout } from "../actions";
function* UsersList() {
    let url = "http://10.100.110.132:4000/users/logout";
    try {
        let usersInfo = yield fetch(url).then(r =>
            r.json()
        );
        console.log("usersInfo", usersInfo);
        yield put(UserLogout(usersInfo));
    } catch (error) {
        console.log("usersInfo", error);
        yield put(UserLogout(error));
    }
}
export function* getUsersListWatcher() {
    yield [takeLatest("UsersList", UsersList)];
}
