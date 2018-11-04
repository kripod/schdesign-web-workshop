import * as React from 'react';
import Layout from '../components/Layout';

interface Props {}

interface State {
  count: number;
}

export default class CounterPage extends React.Component<Props, State> {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  decreaseCount = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <Layout>
        <button type="button" onClick={this.decreaseCount}>
          -
        </button>
        {count}
        <button type="button" onClick={this.increaseCount}>
          +
        </button>
      </Layout>
    );
  }
}
