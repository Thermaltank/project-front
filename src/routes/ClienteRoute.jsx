import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/NavBar";
import { Clientes } from "../Admin/Clientes";

export const ClienteRoute = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ height: "100vh" }}
    >
      <div style={{ height: "17%" }}>
            <NavBar/>
      </div>
      <div style={{ height: "83%", overflow: "auto" }}>
        <Clientes/>
      </div>
    </div>
  );
};



