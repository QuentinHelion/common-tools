import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PropTypes from "prop-types";

const NavLink = ({link, title}) => {
    return (
        <Nav.Link href={`${link}`}>{title}</Nav.Link>
    )
}

NavLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default NavLink;