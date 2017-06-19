import { combineReducers, Reducer } from "redux";
import helloCountReducer from "./HelloCountReducer";
import contentReducer from "./ContentReducer";
import subredditsReducer from "./SubredditsReducer";
import editorReducer from "./EditorReducer";
import { StoreState } from "./../Store/StoreState";

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    helloCount: helloCountReducer,
    content: contentReducer,
    subreddits: subredditsReducer,
    editor: editorReducer,
});

export default rootReducer;