import { createAction } from "redux-actions";

export interface GetConfigStartActionPayload {
}

export interface GetConfigSuccessActionPayload {
    json: string;
}

export interface GetConfigErrorActionPayload {
    error: string;
}

export const GetConfigStartAction =
    createAction<GetConfigStartActionPayload>("GetConfigStartAction", () => ({}));

// an example utilizing payloadCreator
export const GetConfigSuccessAction =
    createAction<GetConfigSuccessActionPayload, string>("GetConfigSuccessAction", (json) => ({json}));

// createAction without payloadCreator
export const GetConfigErrorAction =
    createAction<GetConfigErrorActionPayload, GetConfigErrorActionPayload>("GetConfigErrorAction", undefined);