import { combineReducers, Reducer } from "redux";
import editorReducer from "./EditorReducer";
import tabReducer from "./TabReducer";

import { StoreState } from "./../Store/StoreState";

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    editor: editorReducer,
    tab: tabReducer,
});

export default rootReducer;