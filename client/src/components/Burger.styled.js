import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: -32px;
  bottom: 0px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#eeeeee" : "#eeeeee")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    margin-left: -114px;
    margin-top: -1439px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 600px) {
    div {
      margin-left: -260px;
    }
  }

  @media (min-width: 768px) {
    div {
      margin-left: -320px;
    }
  }
  @media (min-width: 1024px) {
    div {
      margin-left: -440px;
    }
  }

  @media (min-width: 1200px) {
    div {
      margin-left: -540px;
    }
  }

  @media (min-width: 1600px) {
    div {
      margin-left: -730px;
    }
  }

  @media (min-width: 2048px) and (orientation: landscape) {
    div {
      margin-left: -950px;
    }
  }
`;
