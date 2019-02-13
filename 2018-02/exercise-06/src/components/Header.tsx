import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

interface Props {
  className: string;
  children: React.ReactNode;
}

interface State {
  isOpen: boolean;
}

export default class Header extends React.Component<Props, State> {
  static defaultProps = {
    className: '',
  };

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { className, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Navbar
        sticky="top"
        color="light"
        light
        expand="md"
        className={`mb-3 ${className}`}
      >
        <StaticQuery
          query={graphql`
            {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <NavbarBrand tag={Link} to="/">
              {data.site.siteMetadata.title}
            </NavbarBrand>
          )}
        />
        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={isOpen} navbar>
          {children}
        </Collapse>
      </Navbar>
    );
  }
}
