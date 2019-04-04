import * as React from 'react';
import './App.css';

export interface IButtonComponentProps {
  link: string;
  icon: any;
}

class ButtonComponent extends React.Component<IButtonComponentProps, {}> {
  public render() {
    return (
      <a href={this.props.link}>
        <img className="Icon" src={this.props.icon} />
      </a>
    );
  }
}

export default ButtonComponent;
