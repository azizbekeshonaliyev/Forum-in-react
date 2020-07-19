import * as types from "./../constants/actionTypes";

export const addQuestion = payload => ({ type: types.ADD_QUESTION, payload })
export const deleteQuestion = id => ({ type: types.DELETE_QUESTION, id })
export const eidtQuestion = payload => ({ type: types.EDIT_QUESTION, payload })
export const completedQuestion = id => ({ type: types.COMPLETE_QUESTION, id })
