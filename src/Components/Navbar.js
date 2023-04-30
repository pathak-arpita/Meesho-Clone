import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../index.css"

export const Title = () => (
  <Link to="/" className="nav-ul">
      <ul>
          <li>M</li>
          <li>E</li>
          <li>E</li>
          <li>S</li>
          <li>H</li>
          <li>O</li>
      </ul>
  </Link>
);

function Navbar() {
 const logedUser = JSON.parse(localStorage.getItem("loginDetails"));
  console.log(logedUser)
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const signOut = () => {
    // dispatch({
    //   type: "SET_USER",
    //   user: null,
    // });

    //  localStorage.removeItem("logedUser");
     navigate("/");
   };
   
  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate("/")}>
          <Title />
        </Logo>
        <RightContainer>
          <NavButton
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>User ,</p>
            <p>{logedUser === null ? "Sign In" : "Sign Out"}</p>
          </NavButton>
          <NavButton onClick={() => navigate("/orders")}>
            <p>Return</p>
            <p>& Orders</p>
          </NavButton>
          <BasketButton onClick={() => navigate("/checkout")}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket?.length}</p>
          </BasketButton>
        </RightContainer>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  top:0;
  position: sticky;
  z-index:2000;
 
  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
   width: 95%;
  display: flex;
  justify-content: space-between;
   margin: 7px 28px;
   margin-top: 45px;
  box-shadow: 0 5px 5px 2px gray;
  
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 70px;
  margin-right:180px
  cursor: pointer;
  margin-top:20px;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: black;
   padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;

  p {
    &:nth-child(1) {
      font-size: 16px;
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;
  
  img {
    width: 30px;
    margin-right: 10px;
    color: blue;
  }

  p {
    color: black;
    font-weight: 500;
  }
`;
export default Navbar;
