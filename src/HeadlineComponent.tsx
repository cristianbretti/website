import * as React from "react";
import "./App.css";

export interface IHeadlineComponentProps {text: string};

class HeadlineComponent extends React.Component<IHeadlineComponentProps, {}> {
    public render() {
        return (
            <h2 className="Headline">{this.props.text}</h2>
        )
    }
}

export default HeadlineComponent