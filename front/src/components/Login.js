import React from "react";
import Formulario from "./Formulario";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const campos = [
    {
      label: "correo",
      type: "email",
    },
    {
      label: "clave",
      type: "password",
    },
  ];

  const validateForm = (values) => {
    const err = {};
    return err;
  };
  return (
    <Row className="justify-content-md-center">
      <Col xs="6">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Formulario campos={campos} validateForm={validateForm} />
            <div className="text-center">
              <Card.Text>O ingresa con google</Card.Text>
              <Button variant="danger" type="submit">
                Google
              </Button>
              <Card.Text>No tienes una cuenta ?</Card.Text>
              <Link to="/signup">registrate</Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
