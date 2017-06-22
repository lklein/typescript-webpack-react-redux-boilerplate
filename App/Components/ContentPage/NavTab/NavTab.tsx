import * as React from "react";
import BaseComponent from "./../../BaseComponent";

import CodeEditor from "../CodeEditor/CodeEditor";

import { Grid, Menu, Segment } from "semantic-ui-react";

interface INavTabProps {
    activeItem?: string;
    code?: string;

    fetchConfig?: (name) => void;
};

export default class NavTab extends BaseComponent<INavTabProps, {}> {

    doRender(): React.ReactElement<{}> {
        const activeItem = this.props.activeItem;

        const loadTab: (event, {name}) => void = (event, {name}) => {
            this.props.fetchConfig(name);
        };

        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name="AnalysisConfig" active={activeItem === "AnalysisConfig"} onClick={loadTab} />
                        <Menu.Item name="AnalysisTemplates" active={activeItem === "AnalysisTemplates"} onClick={loadTab} />
                        <Menu.Item name="ExperimentManagementGroup" active={activeItem === "ExperimentManagementGroup"} onClick={loadTab} />
                        <Menu.Item name="Schemas" active={activeItem === "Schemas"} onClick={loadTab} />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <CodeEditor code={this.props.code}/>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}