import { combineReducers, Reducer } from "redux";
import contentReducer from "./ContentReducer";
import subredditsReducer from "./SubredditsReducer";
import editorReducer from "./EditorReducer";
import tabReducer from "./TabReducer";

import { StoreState } from "./../Store/StoreState";

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    content: contentReducer,
    subreddits: subredditsReducer,
    editor: editorReducer,
    tab: tabReducer,
});

export default rootReducer;