import { takeLatest, call, put } from "redux-saga/effects";
import toast from "react-hot-toast";

import { Constants, Actions } from ".";

import * as api from "../../../services";

function* getAll({ offset }) {
  try {
    const characters = yield call(api.getCharacters, offset);

    yield put(Actions.getAllSuccess(characters));
  } catch (e) {
    yield put(Actions.getAllFailure(e));
    yield call(toast.error, e);
  }
}

export default function* root() {
  yield takeLatest(Constants.CHARACTER_GET_ALL, getAll);
}
