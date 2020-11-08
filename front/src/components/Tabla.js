import React from "react";
import _ from "lodash";

const Tabla = ({ values }) => {
  const renderHeaders = (cols) => {
    return cols.map((col) => {
      return (
        <th key={col} scope="col">
          {col}
        </th>
      );
    });
  };

  const renderBody = (lista, cols) => {
    return lista.map((item) => {
      return (
        <tr key={item._id}>
          {cols.map((col) => {
            return <td key={col}>{item[col]}</td>;
          })}
        </tr>
      );
    });
  };

  const limpiezaColumnas = (cols) => {
    _.remove(cols, function (col) {
      return (
        col === "_id" || col === "__v" || col === "clave" || col === "token"
      );
    });
    return cols;
  };

  if (values) {
    if (values.length > 0) {
      var columnas = Object.keys(values[0]);
      columnas = limpiezaColumnas(columnas);
      return (
        <table className="table table-striped">
          <thead>
            <tr>{renderHeaders(columnas)}</tr>
          </thead>
          <tbody>{renderBody(values, columnas)}</tbody>
        </table>
      );
    }
    return <p>No hay datos</p>;
  }
  return <p>Cargando</p>;
};

export default Tabla;
