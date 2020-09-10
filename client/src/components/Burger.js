import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(false)}>
      <div className="burger-color" />
      <div className="burger-color" />
      <div className="burger-color" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
