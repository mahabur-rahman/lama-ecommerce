import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
// data
import { categories } from "../Data/data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </Container>
    </>
  );
};

export default Categories;
