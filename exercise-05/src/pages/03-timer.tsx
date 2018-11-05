import * as React from 'react';
import Timer from '../components/Timer';

const TimerPage = () => (
  <Timer
    interval={1000}
    render={ticks => (
      // The appearance of this custom component is fully customizable
      // Data can be separated from layout through:
      // - Render props: https://reactjs.org/docs/render-props.html
      // - Hooks: https://reactjs.org/docs/hooks-overview.html#-building-your-own-hooks
      // - Higher-order components (HOCs): https://reactjs.org/docs/higher-order-components.html
      <div>Seconds passed: {ticks}</div>
    )}
  />
);

export default TimerPage;
