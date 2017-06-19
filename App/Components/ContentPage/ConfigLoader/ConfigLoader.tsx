import * as React from "react";
import BaseComponent from "./../../BaseComponent";
import Button from "./../../Common/Button/Button";

// tslint:disable-next-line:no-any
const styles: any = require("./ConfigLoader.module.less");

interface IConfigLoaderProps {
    fetchConfig: () => void;
};

export default class ConfigLoader extends BaseComponent<IConfigLoaderProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div className={styles.container}>
                    <div className={styles.subredditButtons}>
                        <Button onClick={() => this.props.fetchConfig()}>Load Config</Button>
                    </div>
                </div>);
    }
};