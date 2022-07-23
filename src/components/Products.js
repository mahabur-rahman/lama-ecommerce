import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../Data/data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, sort, filters }) => {
  console.log(cat, filters);
  // console.log(cat, sort, filters);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/products?category=${cat}`
            : `http://localhost:4000/api/products`
        );

        // console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllProducts();
  }, [cat]);

  //  ########## for filtering  ##########
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // ########## for sorting asc | desc ##########
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createAt - b.createAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.price - b.price;
        });
      });
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
