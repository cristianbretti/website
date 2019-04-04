import * as React from 'react';
import './App.css';

export interface INameComponentProps {
  text: string;
}

class NameComponent extends React.Component<INameComponentProps, {}> {
  public render() {
    return <h1 className="Name">{this.props.text}</h1>;
  }
}

export default NameComponent;
