import React, { useEffect, useState } from "react";
import axios from "axios";

import Tabla from "../Tabla";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("/api/usuario");

    setUsuarios(result.data);
  };

  return (
    <div className="container">
      <Tabla values={usuarios} />
    </div>
  );
};

export default Usuarios;
