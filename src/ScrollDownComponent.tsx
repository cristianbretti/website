import * as React from 'react';
import './App.css';
import down from './assets/down-arrow.png';

class ScrollDownComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={'Scroll-icon no-print'}>
        <div className={'Scroll-text'}>Scroll down</div>
        <img className={'Icon-large Icon-bounce'} src={down} />
      </div>
    );
  }
}

export default ScrollDownComponent;
