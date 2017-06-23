import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ContentPage from "./Components/ContentPage/ContentPage";
import BaseComponent from "./Components/BaseComponent";
import { StoreState } from "./Store/StoreState";

require("./Global/Styles/global.less");

interface IAppProps {
}

class App extends BaseComponent<IAppProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div>
                    <ContentPage />
                </div>);
    }
};

export default App;