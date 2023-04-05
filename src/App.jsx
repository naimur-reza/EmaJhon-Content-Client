import React from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Outlet, useLoaderData } from 'react-router-dom';
import loaderData from "../src/LoaderData"
const App = () => {
  loaderData()
  return (
    <div>
      <Header></Header>
      <Outlet/>
    </div>
  );
};

export default App;