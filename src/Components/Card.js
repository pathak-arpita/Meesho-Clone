import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";
function Card({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("basket >>>>", basket);
  const[dis , setDis] = useState(false);
  
  const addToBasket = (e) => {
    e.preventDefault();
    e.currentTarget.disabled = true;
    e.currentTarget.style.backgroundColor= "#fff";
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

  return (
    <Container>
      <Image>
        <img src={image} alt="img" />
      </Image>
      <Description>
        <h5>{title}....</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>₹ {price}</p>

        <button onClick={addToBasket}>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  height: 95%;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  position:sticky;
  top:180px;
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    color:white;
    background-color: rgb(244, 51, 151);
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;