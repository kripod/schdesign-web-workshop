import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import {
  Collapse,
  Form,
  Input,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import GatsbyNavLink from './GatsbyNavLink';

interface Props {}

interface State {
  isOpen: boolean;
}

export default class Header extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Navbar sticky="top" color="light" light expand="md" className="mb-2">
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
            <NavbarBrand href="/">{data.site.siteMetadata.title}</NavbarBrand>
          )}
        />
        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <GatsbyNavLink to="/">Kezdőlap</GatsbyNavLink>
            </NavItem>
            <NavItem>
              <GatsbyNavLink to="/technology/">Technológia</GatsbyNavLink>
            </NavItem>
            <NavItem>
              <GatsbyNavLink to="/design/">Design</GatsbyNavLink>
            </NavItem>
            <NavItem>
              <GatsbyNavLink to="/economy/">Gazdaság</GatsbyNavLink>
            </NavItem>
          </Nav>

          <Form inline className="my-2 my-lg-0">
            <Input type="search" placeholder="Keresés…" />
          </Form>
        </Collapse>
      </Navbar>
    );
  }
}
