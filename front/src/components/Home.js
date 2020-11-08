import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Ejercicio JWT</h1>
      <p>
        Se tienen 3 roles dentro de la aplicación y cada uno de ellos puede
        acceder a diferentes endpoints. Luego de hacer login refrescar para ver
        los cambios
      </p>
      <dl>
        <dt>Usuario</dt>
        <p class="text-muted">usuario@ejemplo.com usuario</p>
        <dd>Ver perfil, ver productos</dd>
        <dt>Empresa </dt>
        <p class="text-muted">empresa@ejemplo.com empresa</p>
        <dd>ver productos, crear productos</dd>
        <dt>Admin</dt>
        <p class="text-muted">admin@ejemplo.com admin</p>
        <dd>Ver empresas, ver productos, ver usuarios</dd>
      </dl>
    </div>
  );
};

export default Home;
