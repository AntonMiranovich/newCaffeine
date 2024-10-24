import { useState } from 'react';
import styled from 'styled-components';

interface WrapperProps {
  open: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  margin: auto;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    padding: 2%;
  }

  h1 {
    font: 400 35px 'Clicker Script';
    color: #ffffff;

    @media (max-width: 900px) {
      font: 300 28px 'Clicker Script';
    }
  }

  button {
    display: block;
    color: #ffffff;
    background: none;
    border: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .btn_active {
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }

  .container {
    display: flex;
    gap: 35px;
  }

  .navigation {
    display: flex;
    gap: 60px;

    @media (max-width: 900px) {
      gap: 30px;
    }

    p {
      color: #ffffff;
    }
  }

  ul {
    display: flex;
    gap: 60px;
    list-style-type: none;
    padding: 0;
  }

  .burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;

    div {
      width: 25px;
      height: 3px;
      background: white;
      margin: 4px 0;
    }

    @media (max-width: 700px) {
      display: flex;
    }
  }

  .menu {
    display: flex;
    gap: 60px;
    align-items: center;

    p {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    @media (max-width: 900px) {
      gap: 20px;
    }

    @media (max-width: 700px) {
      display: ${props => (props.open ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 70px;
      z-index: 9;
      background-color: #333;
      width: 100%;
      left: 0;
      padding: 20px 0;
      align-items: center;
    }
  }

  .wrapperBtn {
    display: flex;
    flex-direction: row;
    gap: 35px;

    @media (max-width: 700px) {
      display: ${props => (props.open ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      z-index: 10;
      background-color: #333;
      width: 100%;
      left: 0;
      padding: 20px 0;
      gap: 15px;
      align-items: center;
      top: 270px;
    }
  }
`;

const Header = () => {
  const nav = ['Home', 'Menu', 'About Us', 'Contact Us'];
  const [open, setopen] = useState(false);

  const toggleMenu = () => {
    setopen(!open);
  };

  return (
    <Wrapper open={open}>
      <h1>Caffeine</h1>
      <div className="burger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className="navigation">
        <ul className={`menu ${open ? 'active' : ''}`}>
          {nav.map(el => (
            <li key={el}>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="wrapperBtn">
        <button>Sign In</button>
        <button className="btn_active">Sign Up</button>
      </div>
    </Wrapper>
  );
};

export default Header;
