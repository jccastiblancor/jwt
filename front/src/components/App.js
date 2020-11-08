import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../css/main.css";
import Navigation from "./Navigation";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Productos from "./listados/Productos";
import Empresas from "./listados/Empresas";
import Usuarios from "./listados/Usuarios";
import Perfil from "./Perfil";
import CreateProducto from "./listados/CreateProducto";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/productos" component={Productos}></Route>
      <Route path="/empresas" component={Empresas}></Route>
      <Route path="/usuarios" component={Usuarios}></Route>
      <Route path="/perfil" component={Perfil}></Route>
      <Route path="/new/producto" component={CreateProducto}></Route>
    </BrowserRouter>
  );
};

export default App;
