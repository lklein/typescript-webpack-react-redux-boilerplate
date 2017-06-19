import { HelloCountState } from "./State/HelloCountState";
import { ContentState } from './State/ContentState';
import { EditorState } from './State/EditorState';
import { SubredditsState } from './State/SubredditsState';

export interface StoreState {
    readonly helloCount: HelloCountState;
    readonly content: ContentState;
    readonly subreddits: SubredditsState;
    readonly editor: EditorState;
};