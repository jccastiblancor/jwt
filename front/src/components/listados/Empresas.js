import React, { useEffect, useState } from "react";
import axios from "axios";

import Tabla from "../Tabla";

const Empresas = () => {
  const [empresas, setEmpresas] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("/api/empresa");

    setEmpresas(result.data);
  };

  return (
    <div className="container">
      <Tabla values={empresas} />
    </div>
  );
};

export default Empresas;
