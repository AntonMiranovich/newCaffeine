import styled from 'styled-components';

const StyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  max-width: 1220px;
  padding: 1% 0;
  margin: auto;

  @media (max-width: 900px) {
    padding: 2%;
  }

  h1 {
    font-family: Clicker Script;
    font-size: 35px;
    font-weight: 400;
    color: #ffffff;
  }

  button:first-child {
    display: block;
    background: none;
    border: none;
    color: #ffffff;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .btn-active {
    background: #f9c06a;
    padding: 14px 27px;
    border: none;
    border-radius: 24px;
    color: #1e1e1e;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    color: #ffffff;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Header = () => {
  const nav: String[] = ['Home', 'Menu', 'About Us', 'Contact Us'];

  return (
    <>
      <StyleDiv>
        <h1>Caffeine</h1>

        <StyleDiv style={{ gap: 60 }}>
          {nav.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </StyleDiv>

        <StyleDiv style={{ gap: 35 }}>
          <button>Sign In</button>
          <button className="btn-active">Sign Up</button>
        </StyleDiv>
      </StyleDiv>
    </>
  );
};

export default Header;
