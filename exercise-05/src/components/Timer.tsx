import * as React from 'react';

interface State {
  ticks: number;
}

interface Props {
  interval: number;
  render: (ticks: number) => React.ReactNode;
}

export default class Timer extends React.Component<Props, State> {
  state = {
    ticks: 0,
  };

  componentWillMount() {
    const { interval } = this.props;

    this.intervalID = window.setInterval(
      () => this.setState(state => ({ ticks: state.ticks + 1 })),
      interval,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalID);
  }

  intervalID?: number;

  render() {
    const { render } = this.props;
    const { ticks } = this.state;

    return render(ticks);
  }
}
