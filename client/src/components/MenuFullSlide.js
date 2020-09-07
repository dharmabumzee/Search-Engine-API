import React, { useState, useRef } from "react";
import OnClickOutside from "./OnClickOutside";
import { useSpring } from "react-spring";
import Menu from "./Menu";
import Burger from "./Burger";

function MenuFullSlide({ children, handleOnClick }) {
  const [open, setOpen] = useState(false);

  const fullMenuAnimation = useSpring({
    transform: open ? `translateX(0)` : `translateX(-100%)`,
    opacity: open ? 1 : 0,
  });

  const node = useRef();
  OnClickOutside(node, () => setOpen(false));

  return (
    <div className="MenuFullSlide" ref={node}>
      <button
        className="menu-menu-button menu-menu-button--full menu-menu"
        onClick={() => setOpen(!open)}
      >
        <Burger
          open={open}
          setOpen={setOpen}
          onClick={() => {
            setOpen(!open);
          }}
          className="menu-menu-button menu-menu-button--full menu-menu"
        />
      </button>

      <Menu
        style={fullMenuAnimation}
        children={children}
        handleOnClick={handleOnClick}
        setOpen={setOpen}
      />
    </div>
  );
}

export default MenuFullSlide;
