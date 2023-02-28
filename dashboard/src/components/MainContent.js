import { Route, Switch } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Footer from "./Footer";
import LastProductInDb from "./LastProductCard";
import LastUserInDb from "./LastUserCard";
import ProductsList from "./ProductsList";
import ProductsCategories from "./ProductsCategories";
import TopBar from "./TopBar";

function MainContent() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />

        <div className="container-fluid">
          <Switch>
            <Route path="/panel" exact component={DashboardContent} />
            <Route path="/products" component={ProductsList} />
            <Route path="/productsCategories" component={ProductsCategories} />
            <Route path="/last-product" component={LastProductInDb} />
            <Route path="/last-user" component={LastUserInDb} />
          </Switch>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainContent;
