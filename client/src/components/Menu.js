import React from "react";
import { animated } from "react-spring";

const Menu = ({ style, children, handleOnClick, setOpen }) => (
  <animated.div className="menu-menu menu-menu--full" style={style}>
    <nav>
      <h1 className="recent recent-search">
        Search History <i className="history icon" />
      </h1>
      <hr className="classic-divider" />
      {children.map((item, index) => {
        return (
          <div className="content" key={index}>
            <li className="ui list recent" key={index}>
              <a className="content" href="/" onClick={() => setOpen(false)}>
                <div className="box-item" onClick={handleOnClick}>
                  {item}
                </div>
              </a>
            </li>
          </div>
        );
      })}
    </nav>
  </animated.div>
);

export default Menu;
