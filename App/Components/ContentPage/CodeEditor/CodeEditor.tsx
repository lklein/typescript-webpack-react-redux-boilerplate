import * as React from "react";
import BaseComponent from "./../../BaseComponent";
import Button from "./../../Common/Button/Button";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
import { schema } from "./Schema";

// tslint:disable-next-line:no-any
const styles: any = require("./CodeEditor.module.less");

interface ICodeEditorProps {
    code?: string;
    options?: any;
};

export default class CodeEditor extends BaseComponent<ICodeEditorProps, {}> {

    editorWillMount(monaco, editor) {
        const schemaJson: any = JSON.parse(schema);

        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            schemas: [{
                uri: "http://exp/api/mds/Schemas/AnalysisConfig",
                schema: schemaJson,
            }],
        });

    }

    doRender(): React.ReactElement<{}> {
        const code = this.props.code;
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            theme: "vs-dark",
            cursorStyle: "line",
            automaticLayout: true,
            ...this.props.options,
        };
        return (<MonacoEditor
            height="500"
            language="json"
            options={options}
            value={this.props.code}
            editorWillMount={this.editorWillMount}
        />);

    }

}
