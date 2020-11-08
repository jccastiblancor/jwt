import React, { useEffect, useState } from "react";
import axios from "axios";

import Tabla from "../Tabla";

const Productos = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("/api/producto");

    setProductos(result.data);
  };

  return (
    <div className="container">
      <Tabla values={productos} />
    </div>
  );
};

export default Productos;
