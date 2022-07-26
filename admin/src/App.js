// global style
import "./index.scss";
// components
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
// pages
import Home from "./pages/Home/Home";
// routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/NewProduct/NewProduct";

function App() {
  return (
    <>
      <Router>
        <Topbar />

        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/new-product">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
