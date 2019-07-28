import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
    return (
        <div className="navigation">
            <ul className="navigation-nav">
                <li>
                    <a href="/" aria-label="Home"><img alt="Marktguru logo" src="https://www.studium.at/sites/default/files/styles/2018_scale300/public/joblogosstud/marktguru-logo-rgb_1.jpg?itok=_2g3KxyY"/></a>
                </li>
                <li>
                    <NavLink
                        to="/news/1"
                        activeClassName="active"
                        isActive={(match, location) => /news/.test(location.pathname)}
                    >
                        News
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
