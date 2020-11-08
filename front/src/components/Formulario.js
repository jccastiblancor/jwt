import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import _ from "lodash";
import axios from "axios";

const Formulario = ({ campos, validateForm, apiRoute }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const obj = {};

    for (const key of campos) {
      obj[key.label] = "";
    }

    setValues(obj);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let err = validateForm(values);
    setErrors(err);
    if (_.isEmpty(err)) {
      axios
        .post(apiRoute, values)
        .then((res) => {
          console.log(res.status);
          //document.cookie = `token=${res.data.token}`;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const renderMuted = (campo) => {
    if (campo.muted) {
      return <Form.Text className="text-muted">{campo.muted}</Form.Text>;
    }
  };

  const renderFields = () => {
    return campos.map((campo) => {
      return (
        <Form.Group key={campo.label}>
          <Form.Label>{campo.label}</Form.Label>
          <Form.Control
            type={campo.type}
            id={campo.label}
            name={campo.label}
            className={errors[campo.label] ? "form-error" : ""}
            onChange={handleChange}
          />
          {renderMuted(campo)}
        </Form.Group>
      );
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      {renderFields()}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Formulario;
