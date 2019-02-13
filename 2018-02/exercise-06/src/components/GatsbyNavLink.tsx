import { Link } from 'gatsby';
import * as React from 'react';
import { NavLink } from 'reactstrap';

const GatsbyNavLink = (props: any) => <NavLink {...props} tag={Link} />;

export default GatsbyNavLink;
