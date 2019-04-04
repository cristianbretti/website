import * as React from 'react';
import './App.css';

export interface IContactInfoComponentProps {
  text: string;
  icon: any;
}

class ContactInfoComponent extends React.Component<
  IContactInfoComponentProps,
  {}
> {
  public render() {
    return (
      <div className="Contact-info-container">
        <p className="Contact-info-text">{this.props.text}</p>
        <img className="Icon" src={this.props.icon} />
      </div>
    );
  }
}

export default ContactInfoComponent;
