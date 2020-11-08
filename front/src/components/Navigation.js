import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const Navigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("/api/usuario/log/info");

    setUser(result.data);
  };

  const logout = () => {
    axios
      .get(`/api/logout`)
      .then((res) => {
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderOptions = () => {
    if (user) {
      switch (user.rol) {
        case undefined:
          return (
            <Navbar.Collapse className="justify-content-end">
              <Link className="btn" to="/login">
                Login
              </Link>
            </Navbar.Collapse>
          );
        case "admin":
          return (
            <React.Fragment>
              <Navbar.Collapse>
                <Navbar.Text className="nav-text">
                  <Link to="/productos"> Ver productos</Link>
                </Navbar.Text>
                <Navbar.Text className="nav-text">
                  <Link to="/empresas"> Ver Empresas</Link>
                </Navbar.Text>
                <Navbar.Text className="nav-text">
                  <Link to="/usuarios"> Ver Usuarios</Link>
                </Navbar.Text>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={logout}>
                  <Link to="/"> Logout</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </React.Fragment>
          );
        case "empresa":
          return (
            <React.Fragment>
              <Navbar.Collapse>
                <Navbar.Text className="nav-text">
                  <Link to="/productos"> Ver productos</Link>
                </Navbar.Text>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="nav-text">
                  <Link to="/new/producto"> Crear producto</Link>
                </Navbar.Text>
                <Navbar.Text onClick={logout}>
                  <Link to="/"> Logout</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </React.Fragment>
          );
        default:
          return (
            <React.Fragment>
              <Navbar.Collapse>
                <Navbar.Text className="nav-text">
                  <Link to="/productos"> Ver productos</Link>
                </Navbar.Text>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text onClick={logout} className="nav-text">
                  <Link to="/"> Logout</Link>
                </Navbar.Text>

                <Navbar.Text>
                  Signed in as: <Link to="/perfil"> {user.correo}</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </React.Fragment>
          );
      }
    }
  };

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Text>
          <Link to="/"> JWT</Link>
        </Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle />
      {renderOptions()}
    </Navbar>
  );
};

export default Navigation;
