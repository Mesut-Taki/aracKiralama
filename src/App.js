import React from "react";
import Topbar from "./component/common/Topbar";
import MenuBar from "./component/common/MenuBar";
import Slider from "./component/home/Slider";
import CustomerServices from "./component/services/CustomerServices";
import Spacer from "./component/common/Spacer";

const App = () => {
  return (
    <div>
      <Topbar />
      <MenuBar />
      <Slider />
      <Spacer />
      <CustomerServices />
    </div>
  );
};

export default App;
