import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { sayHello } from "./../../ActionCreators/HelloCountActionCreators";
import { fetchPosts } from "./../../ActionCreators/SubredditsActionCreators";
import { fetchConfig } from "./../../ActionCreators/ConfigActionCreators";

import { StoreState } from "./../../Store/StoreState";
import BaseComponent from "./../BaseComponent";
import Button from "./../Common/Button/Button";
import Header from "./Header/Header";
import BodyWrapper from "./BodyWrapper/BodyWrapper";
import SubredditChooser from "./SubredditChooser/SubredditChooser";
import ConfigLoader from "./ConfigLoader/ConfigLoader";
import Posts from "./Posts/Posts";
import NavTab from "./Navtab/NavTab";

// tslint:disable-next-line:no-any
const styles: any = require("./ContentPage.module.less");

interface IContentPageProps {
    bodyTitle?: string;
    bodySummary?: string;
    selectedSubreddit?: Subreddit;
    code?: string;
    activeTabItem?: string;

    fetchSubreddit?: (subreddit: string) => void;
    fetchConfig?: (name) => void;
}

@connect(mapStateToProps, mapDispatchToProps)
class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div className={styles.container}>
            <div className={styles.subreddits}>
                <NavTab code={this.props.code} fetchConfig={this.props.fetchConfig} activeItem={this.props.activeTabItem}/>
            </div>
        </div>);
    }
}

function mapStateToProps(state: StoreState): IContentPageProps {
    return {
        bodyTitle: state.content.title,
        bodySummary: state.content.summary,
        selectedSubreddit: state.subreddits.items[state.subreddits.selectedSubreddit],
        code: state.editor.code,
        activeTabItem: state.tab.activeItem,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
    return {
        fetchSubreddit: (subreddit: string) => dispatch(fetchPosts(subreddit)),
        fetchConfig: (section: string) => dispatch(fetchConfig(section)),
    };
}

export default ContentPage;