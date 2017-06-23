import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchConfig } from "./../../ActionCreators/ConfigActionCreators";

import { StoreState } from "./../../Store/StoreState";
import BaseComponent from "./../BaseComponent";
import Button from "./../Common/Button/Button";
import BodyWrapper from "./BodyWrapper/BodyWrapper";
import NavTab from "./Navtab/NavTab";

// tslint:disable-next-line:no-any
const styles: any = require("./ContentPage.module.less");

interface IContentPageProps {
    code?: string;
    activeTabItem?: string;

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
        code: state.editor.code,
        activeTabItem: state.tab.activeItem,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
    return {
        fetchConfig: (section: string) => dispatch(fetchConfig(section)),
    };
}

export default ContentPage;