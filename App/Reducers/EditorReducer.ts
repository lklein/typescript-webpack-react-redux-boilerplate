import { handleActions } from "redux-actions";
import { GetConfigStartAction, GetConfigSuccessAction, GetConfigErrorAction,
    GetConfigStartActionPayload, GetConfigSuccessActionPayload, GetConfigErrorActionPayload } from "./../Actions/GetConfigActions";
import { EditorState } from "./../Store/State/EditorState";

const initialState: EditorState = {
    code: "",
};

export default handleActions<EditorState>({
    [GetConfigStartAction.toString()]: (state, action: ReduxActions.Action<GetConfigStartActionPayload>) => {
        return {
            ...state,
            isLoading: true,
            isError: false,
        };
    },

    [GetConfigSuccessAction.toString()]: (state, action: ReduxActions.Action<GetConfigSuccessActionPayload>) => {
        return {
            ...state,
            code: action.payload.json,
            isLoading: false,
            isError: false,
        };
    },

    [GetConfigErrorAction.toString()]: (state, action: GetConfigErrorActionPayload) => {
        return {
            ...state,
            isLoading: false,
            isError: true,
            code: "",
        };
    },

}, initialState);