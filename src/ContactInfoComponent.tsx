import * as React from "react";
import "./App.css";

export interface IContactInfoComponentProps {text: string};

class ContactInfoComponent extends React.Component<IContactInfoComponentProps, {}> {
    public render() {
        return (
            <p className="Contact-info-text">{this.props.text}</p>
        )
    }
}

export default ContactInfoComponent