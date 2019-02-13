import * as React from 'react';

interface Props {
  // Optional properties are denoted by a `?` at the end of the property name
  // Specifying their value isn't mandatory, so they're ideal for props with a
  // default value
  // See: https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties
  as?: React.ReactType;
  recipient: string;
}

// React DOM uses camelCase property naming convention, but user-defined
// components must be capitalized, so the `as` prop must be aliased to `T`
// See:
// - https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
// - https://reactjs.org/docs/glossary.html#jsx
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variable_names
const Greeting = ({ as: T = 'p', recipient }: Props) => (
  // Think about curly braces as an escape hatch from the XML-like JSX syntax
  // Any valid JS expression can be used inside braces, even one with JSX inside
  // See: https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
  <T>Hello, {recipient}!</T>
);

export default Greeting;
