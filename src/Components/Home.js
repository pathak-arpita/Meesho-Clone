import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
import Shimmer from "./Shimmer";
import {dataURL} from "../Constant"

function Home() {
  const[data , setData] = useState([]);
  const[filter , setFilter] = useState(data);
  
   let component = true;

    useEffect(() =>{
        const productData = async () =>{
            const data = await fetch(dataURL);
            
            if(component){
                setData(await data.clone().json());
                setFilter(await data.json());
                console.log(filter);
            }

            return () => {
              component = false
            }
        }

        productData();
    } ,[])

    const filterProduct = (category) =>{
      const updatedList = data.filter((x) => x.category === category);
      setFilter(updatedList);
   } 

  return (data.length === 0)?<Shimmer/>: (
    <Container>
      <Navbar />
      <Btn>
      <div className="btns">
        <button className="search-btn" onClick={()=>setFilter(data)}>All Products</button>
        <button className="search-btn" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="search-btn" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="search-btn" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
        <button className="search-btn" onClick={()=>filterProduct("electronics")}> Electronic</button>
      </div>
      </Btn>
      <Banner>
        <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0b8e/6422/560a/0f5c/680f/917b/371c/9c0e/907a/803e/803e.jpeg" alt="" />
        <img src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/0b8e/6422/560a/0f5c/680f/917b/371c/9c0e/907a/803e/803e.jpeg" alt="" />
        </Banner>
      <Main>
    
        {filter.map((data) => (
            <Card 
             key={data.id}
              id={data.id}
              image={data.image}
              price={data.price}
              rating={data.rating.rate}
              title={data.title.substring(0, 25)}
            />
          ))}
          
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  position:sticky;
  top:130px;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
    &:nth-child(2) {
      display: none;
    }
    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;
const Btn = styled.div`
.search-btn {
  padding: 10px 25px;
  border: #fff;
  border-radius: 5px;
  background-color: palevioletred;
  color: #fff;
  margin: 20px 20px;
  cursor: pointer;
  font-size:15px;
}
.btns{
  display: flex;
  padding: 5px 5px;
  font-size: 12px;
  flex-wrap: wrap;
  top:10px;
  position: sticky;
  z-index:1000;
}
`
const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  height:100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
    height: 100%;
    // height: fit-content;
  }
  
  @media (min-width: 767px) and (max-width: 1200px){
    grid-template-columns: repeat(3, 32%);
    grid-gap: 0;
    height: 100%;
  }
  
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
    height: fit-content;
  }
`;
export default Home;