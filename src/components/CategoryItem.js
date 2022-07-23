import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ category }) => {
  return (
    <>
      <Container>
        <Link to={`/products/${category.cat}`}>
          <Image src={category.img} alt={category.title} />
          <Info>
            <Title>{category.title}</Title>
            <span style={{ color: "white", marginBottom: "1rem" }}>
              {category.cat}
            </span>
            <Button>Shop Now</Button>
          </Info>
        </Link>
      </Container>
    </>
  );
};

export default CategoryItem;
