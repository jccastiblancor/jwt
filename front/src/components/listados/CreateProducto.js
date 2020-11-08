import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import Formulario from "../Formulario";

const CreateProducto = () => {
  const campos = [
    {
      label: "nombre",
      type: "text",
    },
    {
      label: "precio",
      type: "number",
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
            <Card.Title>Registrar producto</Card.Title>
            <Formulario
              campos={campos}
              validateForm={validateForm}
              apiRoute="/api/producto"
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CreateProducto;
