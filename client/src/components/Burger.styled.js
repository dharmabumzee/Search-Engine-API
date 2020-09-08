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

  @media (min-width: 360px) and (min-height: 640px) {
    div {
      margin-left: -125px;
    }
  }

  @media (min-width: 375px) {
    div {
      margin-left: -130px;
    }
  }

  @media (min-width: 411px) {
    div {
      margin-left: -150px;
    }
  }

  @media (min-width: 540px) and (min-height: 720px) {
    div {
      margin-left: -200px;
    }
  }

  @media (min-width: 568px) and (min-height: 320px) {
    div {
      margin-left: -220px;
    }
  }

  @media (min-width: 600px) {
    div {
      margin-left: -260px;
    }
  }

  @media (min-width: 720px) and (min-height: 540px) {
    div {
      margin-left: -290px;
    }
  }

  @media (min-width: 731px) and (min-height: 411px) {
    div {
      margin-left: -300px;
    }
  }

  @media (min-width: 768px) {
    div {
      margin-left: -320px;
    }
  }

  @media (min-width: 812px) and (min-height: 375px) {
    div {
      margin-left: -340px;
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

  @media (min-width: 1280px) and (min-height: 800px) {
    div {
      margin-left: -580px;
    }
  }

  @media (min-width: 1366px) and (min-height: 1024px) {
    div {
      margin-left: -620px;
    }
  }

  @media (min-width: 1440px) and (min-height: 900px) {
    div {
      margin-left: -655px;
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

  @media (min-width: 2248px) and (orientation: landscape) {
    div {
      margin-left: -1050px;
    }
  }

  @media (min-width: 2300px) and (orientation: landscape) {
    div {
      margin-left: -1100px;
    }
  }

  @media (min-width: 2400px) and (orientation: landscape) {
    div {
      margin-left: -1200px;
    }
  }
`;
