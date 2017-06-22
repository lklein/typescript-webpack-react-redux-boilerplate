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
    sayHelloCount?: number;
    selectedSubreddit?: Subreddit;
    code?: string;

    sayHello?: () => void;
    fetchSubreddit?: (subreddit: string) => void;
    fetchConfig?: (name) => void;
}

@connect(mapStateToProps, mapDispatchToProps)
class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div className={styles.container}>
            <div className={styles.subreddits}>
                {/*<ConfigLoader fetchConfig={this.props.fetchConfig} />*/}
                <NavTab code={this.props.code} fetchConfig={this.props.fetchConfig}/>
            </div>
        </div>);
    }
}

function mapStateToProps(state: StoreState): IContentPageProps {
    return {
        bodyTitle: state.content.title,
        bodySummary: state.content.summary,
        sayHelloCount: state.helloCount.count,
        selectedSubreddit: state.subreddits.items[state.subreddits.selectedSubreddit],
        code: state.editor.code,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
    return {
        sayHello: () => dispatch(sayHello()),
        fetchSubreddit: (subreddit: string) => dispatch(fetchPosts(subreddit)),
        fetchConfig: (section: string) => dispatch(fetchConfig(section)),
    };
}

export default ContentPage;