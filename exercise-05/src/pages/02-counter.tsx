import * as React from 'react';

interface Props {}

interface State {
  count: number;
}

// Use class components for modeling stateful logic
// Re-renders are invoked by state (internal) or prop (external) changes
// With React Hooks, function components may also be used for this purpose, see:
// https://reactjs.org/docs/hooks-intro.html
export default class CounterPage extends React.Component<Props, State> {
  // Internal component state can be initialized by a class field declaration
  state = {
    count: 0,
  };

  // Functions must be bound to the component instance to make sure they have
  // access to component attributes like `this.props` and `this.state`
  // See: https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance
  increaseCount = () => {
    // The value and contents of `this.state` shall not be modified directly
    // Instead, enqueue changes to the component state by calling a method which
    // will eventually update `this.state` with the given values, optionally
    // based on the previous `state` and `props`
    // See: https://reactjs.org/docs/react-component.html#setstate
    this.setState(state => ({ count: state.count + 1 }));
  };

  decreaseCount = () => {
    this.setState(state => ({ count: state.count - 1 }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <button
          type="button"
          // Make sure not to call the function when passing it as an attribute
          // See: https://reactjs.org/docs/faq-functions.html#why-is-my-function-being-called-every-time-the-component-renders
          onClick={this.decreaseCount}
        >
          -
        </button>{' '}
        {count}{' '}
        <button type="button" onClick={this.increaseCount}>
          +
        </button>
      </>
    );
  }
}
