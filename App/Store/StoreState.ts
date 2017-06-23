import { ContentState } from "./State/ContentState";
import { EditorState } from "./State/EditorState";
import { TabState } from "./State/TabState";
import { SubredditsState } from "./State/SubredditsState";

export interface StoreState {
    readonly content: ContentState;
    readonly subreddits: SubredditsState;
    readonly editor: EditorState;
    readonly tab: TabState;
};