import React from 'react';

import Main from "./route/index";
import MenuNavbar from "./components/MenuNavbar";
import { connect } from "react-redux";

function App() {
  return (

    <div>  
      <MenuNavbar>        
      </MenuNavbar>

      <Main />

      

</div>
      
  );
}

export default connect()(App);
