import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.PureComponent {
  state = {
    defaultIndex: 0,
  }

  onTabSelect = (index) => {
    this.setState({
      defaultIndex: index,
    });
  }

  render() {
    const { defaultIndex } = this.state;

    return (
      <div className="w-25">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          index={defaultIndex}
          onSelect={this.onTabSelect}
        />
      </div>
    );
  }
}

export default App;
