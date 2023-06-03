import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
function App () {
 const []


  return(
    <div>
      <Navbar></Navbar>

      <Filter filterData={filterData}></Filter>

      <Cards></Cards>
    </div>
  );
};

export default App;
