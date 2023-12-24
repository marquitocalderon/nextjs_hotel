import Link from "next/link";
import React, { Fragment } from "react";
import axiosUsuarios from "./funciones/get";
import CardComponent from "@/components/Card";
import Buscador from "@/components/Buscador";
import InicioCliente from "./pageUseclient";

export default async function page() {
  const datos = await axiosUsuarios("https://backendprueba-9rnj.onrender.com/habitaciones");

  return (
    <InicioCliente datos={datos}></InicioCliente>
  );
}
