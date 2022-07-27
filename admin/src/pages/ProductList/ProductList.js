import { useState, useEffect } from "react";
// style
import "./productList.scss";

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../Data/data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();

  // u can check redux devtools
  const products = useSelector((state) => state.product.products);

  // console.log(products);

  const [data, setData] = useState(productRows);

  // fetch ALL PRODUCTS
  useEffect(() => {
    // call func from api apiCall.js
    getProducts(dispatch);
  }, [dispatch]);

  // handleDelete func

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
    // run time delete so again call getProduct()
    getProducts(dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 }, // In DB (id : _id)
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 }, // In DB (stock : inStock)

    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        // rows={data}
        rows={products}
        getRowId={(row) => row._id} // it will be add after fetching data
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
