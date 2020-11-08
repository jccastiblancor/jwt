import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Formulario from "./Formulario";

const Signup = () => {
  const campos = [
    {
      label: "correo",
      type: "email",
      muted: "No compartiremos tu informacion con nadie",
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
            <Card.Title>Registrate</Card.Title>
            <Formulario
              campos={campos}
              validateForm={validateForm}
              apiRoute="/api/signup"
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Signup;
