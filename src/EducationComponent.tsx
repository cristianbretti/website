import * as React from 'react';
import './App.css';

export interface IEducationComponentProps {
  name: string;
  time: string;
  text: string;
}

class EducationComponent extends React.Component<IEducationComponentProps, {}> {
  public render() {
    return (
      <div className="Component-container">
        <h3 className="Sub-headline"> {this.props.name} </h3>
        <p className={'Content Time'}> {this.props.time}</p>
        <p className={'Content Long-content'}> {this.props.text}</p>
      </div>
    );
  }
}

export default EducationComponent;
