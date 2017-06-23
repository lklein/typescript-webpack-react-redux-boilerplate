import { handleActions } from "redux-actions";
import { ChangeTabAction, ChangeTabActionPayload } from "./../Actions/ChangeTabAction";
import { TabState } from "./../Store/State/TabState";

const initialState: TabState = {
    activeItem: "AnalysisConfig",
};

export default handleActions<TabState, void>({
    [ChangeTabAction.toString()]: (state, action: ReduxActions.Action<ChangeTabActionPayload>) => {
        return {
            activeItem: action.payload.activeItem,
        };
    },
}, initialState);