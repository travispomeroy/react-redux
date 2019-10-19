import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    const activeStyle = { color: "#F15B2A" };

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact={true}>
                Home
            </NavLink>{" "}
            |{" "}
            <NavLink to="/courses" activeStyle={activeStyle}>
                Courses
            </NavLink>{" "}
            |{" "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
        </nav>
    );
};

export default Header;
