import { Dispatch } from "redux";
import { GetConfigStartAction, GetConfigSuccessAction, GetConfigErrorAction } from "./../Actions/GetConfigActions";
import * as ConfigProvider from "./../DataLayer/ConfigProvider";

export function fetchConfig(section: string): (dispatcher: Dispatch<{}>) => Promise<{}> {
    return (dispatch: Dispatch<{}>) => {
        dispatch(GetConfigStartAction());

        return ConfigProvider.fetchConfig(section)
            .then((result: string) => dispatch(GetConfigSuccessAction(result)))
            .catch(() => dispatch(GetConfigErrorAction({error: "FETCHING_ERROR"})));
    };
}