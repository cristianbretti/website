import * as React from "react";
import "./App.css";

export interface IWorkComponentProps {name: string, time: string, position: string, text: string};

class WorkComponent extends React.Component<IWorkComponentProps, {}> {
    public render() {
        return (
            <div>
                <h3 className="Sub-headline"> {this.props.name} </h3>
                <p className={"Content Time"}> {this.props.time}</p>
                <p className="Content"> {this.props.position}</p>
                <p className={"Content Long-content"}> {this.props.text}</p>
            </div>
        )
    }
}

export default WorkComponent