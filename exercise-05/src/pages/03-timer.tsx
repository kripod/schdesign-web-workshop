import * as React from 'react';
import Timer from '../components/Timer';

const TimerPage = () => (
  <Timer interval={1000} render={ticks => <div>Seconds passed: {ticks}</div>} />
);

export default TimerPage;
