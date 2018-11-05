import * as React from 'react';

interface Props {
  as?: React.ReactType;
  recipient: string;
}

const Greeting = ({ as: T = 'p', recipient }: Props) => (
  <T>Hello, {recipient}!</T>
);

export default Greeting;
