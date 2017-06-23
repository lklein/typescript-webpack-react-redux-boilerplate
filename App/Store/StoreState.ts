import { EditorState } from "./State/EditorState";
import { TabState } from "./State/TabState";

export interface StoreState {
    readonly editor: EditorState;
    readonly tab: TabState;
};