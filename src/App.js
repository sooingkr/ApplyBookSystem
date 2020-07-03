import React from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./bundles/common/routes/common";
import { MenuContainer } from "./bundles/common/components/Menu";
import Footer from "./bundles/common/components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <MenuContainer />
      {routes}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
