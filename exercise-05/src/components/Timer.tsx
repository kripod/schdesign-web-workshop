import * as React from 'react';

interface Props {
  interval: number;

  // Share the encapsulated state of the component through a render prop
  // See: https://reactjs.org/docs/render-props.html
  render: (ticks: number) => React.ReactNode;
}

interface State {
  ticks: number;
}

export default class Timer extends React.Component<Props, State> {
  state = {
    ticks: 0,
  };

  componentDidMount() {
    const { interval } = this.props;

    // Increase the amount of ticks every time the given interval passes
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    this.intervalID = window.setInterval(
      () => this.setState(state => ({ ticks: state.ticks + 1 })),
      interval,
    );
  }

  componentWillUnmount() {
    // Stop firing timer events just before the component unmounts
    window.clearInterval(this.intervalID);
  }

  // Classes may contain custom class fields (besides the state)
  // These may be used if no re-render is necessary when the given fields change
  intervalID?: number;

  render() {
    const { render } = this.props;
    const { ticks } = this.state;

    // Call render prop with the publicly shared part of the state
    return render(ticks);
  }
}
