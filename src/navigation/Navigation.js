import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
    return (
        <div className="navigation">
            <ul className="navigation-nav">
                <li>
                    <a href="/" aria-label="Home"><img width="20" height="18" alt="react logo" src="https://media.giphy.com/media/f9T2Zn3GANFhpbgftW/giphy.gif"/></a>
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
