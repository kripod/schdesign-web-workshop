import * as React from 'react';
import Greeting from '../components/Greeting';

// Use function components (instead of classes) for modeling stateless behavior
// An equivalent class component may be constructed if necessary, see:
// https://reactjs.org/docs/components-and-props.html#function-and-class-components
const HelloReactPage = () => <Greeting recipient="React" />;

export default HelloReactPage;
