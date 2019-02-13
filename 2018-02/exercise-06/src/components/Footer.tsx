import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const Footer = ({ children }: Props) => (
  <footer className="text-center bg-light py-3 mt-3">{children}</footer>
);

export default Footer;
