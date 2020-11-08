import React, { useEffect, useState } from "react";
import axios from "axios";

const Perfil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get("/api/usuario/log/info");

    setUser(result.data);
  };

  return (
    <div className="container">
      <p>Correo: {user ? user.correo : "cargando"}</p>
    </div>
  );
};

export default Perfil;
