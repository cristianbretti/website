import * as React from "react";
import "./App.css";

export interface ISummaryComponentProps {headline: string, text: string};

class SummaryComponent extends React.Component<ISummaryComponentProps, {}> {
    public render() {
        return (
            <div className="Component-container">
                <h4 className="Sub-headline">{this.props.headline}</h4>
                <p className="Content">
                    {this.props.text}
                </p>
            </div>
            
        )
    }
}

export default SummaryComponent