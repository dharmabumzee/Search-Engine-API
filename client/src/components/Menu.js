import React from "react";
import { animated } from "react-spring";
import "./Menu.css";

const Menu = ({ style, children, handleOnClick, setOpen }) => (
  <animated.div className="menu-menu menu-menu--full" style={style}>
    <nav className="nav">
      <h1 className="recent-search">
        Search History <i className="history icon" />
      </h1>
      <hr className="classic-divider" />
      <div className="query-history">
        {children.map((item, index) => {
          return (
            <div className="content" key={index}>
              <li className="ui list recent" key={index}>
                <a
                  className="content-link"
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  <div className="box-item" onClick={handleOnClick}>
                    {item}
                  </div>
                </a>
              </li>
            </div>
          );
        })}
      </div>
    </nav>
  </animated.div>
);

export default Menu;
