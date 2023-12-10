"use client"
import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { useRouter } from "next/navigation"; // Import the router

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cambiarBoton, setCambiarBoton] = useState(false);
  const router = useRouter(); // Initialize the router

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const logeoUsuario = async (e) => {
    setCambiarBoton(true)
    e.preventDefault();
    const formDatos = new FormData(e.target);

    const enviarDatos = {
      usuario: formDatos.get("usuario"),
      password: formDatos.get("password"),
    };

    try {
      const response = await axios.post(
        "https://backendprueba-9rnj.onrender.com/login",
        enviarDatos
      );
      console.log(response);
      
      if (response.status === 200) {
        // Mover la redirección aquí
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          setErrorMessage("ERROR EN EL SERVIDOR");
        } else if (error.response.status === 401) {
          setErrorMessage(error.response.data);
        } else {
          setErrorMessage("ERROR DE ENVÍO DE DATOS");
        }
      } else {
        setErrorMessage("ERROR");
      }
    }
  };


  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-white">
      <div className="w-1/2  h-full">
        <div className="flex justify-center items-center h-screen px-32">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M594.7 800.4H272.4c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4h322.3c10.7 0 19.4-8.7 19.4-19.4 0-10.8-8.7-19.4-19.4-19.4z"
              fill="#005BFF"
            />
            <path
              d="M912.9 771.4v39H968c-8.1-22.7-29.7-39-55.1-39z"
              fill="#E6E6E6"
            />
            <path
              d="M815.6 675.9V235.2c0-16.1-13.1-29.1-29.1-29.1H80.6c-16.1 0-29.1 13.1-29.1 29.1v440.7c0 16.1 13.1 29.1 29.1 29.1h705.9c16.1 0.1 29.1-13 29.1-29.1z m-43.9-42c0 16-13.1 29.1-29.1 29.1h-618c-16 0-29.1-13.1-29.1-29.1V277.3c0-16 13.1-29.1 29.1-29.1h618c16 0 29.1 13.1 29.1 29.1v356.6z"
              fill="#FFFFFF"
            />
            <path
              d="M742.6 248.2h-618c-16 0-29.1 13.1-29.1 29.1v356.6c0 16 13.1 29.1 29.1 29.1h618c16 0 29.1-13.1 29.1-29.1V277.3c0-16-13.1-29.1-29.1-29.1z m-523.3 32.2c0-1.6 1.3-2.8 2.8-2.8h61.3c1.6 0 2.8 1.3 2.8 2.8v17.5c0 1.6-1.3 2.8-2.8 2.8h-61.3c-1.6 0-2.8-1.3-2.8-2.8v-17.5z m-30.3-3.5c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9c-6.6 0-11.9-5.3-11.9-11.9s5.4-11.9 11.9-11.9z m-39 0c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9c-6.6 0-11.9-5.3-11.9-11.9s5.3-11.9 11.9-11.9z m237.3 181.7c0 67.8-55.2 123-123 123s-123-55.2-123-123 55.2-123 123-123h9.7v113.3h113.3v9.7z m-90.1-38.7v-94.7c52.3 0 94.7 42.4 94.7 94.7h-94.7z m373.6 148.9H530.1c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h140.7c5.4 0 9.7 4.3 9.7 9.7 0 5.3-4.3 9.7-9.7 9.7z m0-73.3H525.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h145.6c5.4 0 9.7 4.3 9.7 9.7s-4.3 9.7-9.7 9.7z m0-73.4H461.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h209.7c5.4 0 9.7 4.3 9.7 9.7s-4.4 9.7-9.8 9.7z m0-73.3H461.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h209.7c5.4 0 9.7 4.3 9.7 9.7s-4.4 9.7-9.8 9.7z"
              fill="#E6E6E6"
            />
            <path
              d="M254.6 355.5c-52.6 4.9-93.9 49.3-93.9 103.1 0 57.1 46.5 103.6 103.6 103.6 53.8 0 98.2-41.3 103.1-93.9H254.6V355.5z"
              fill="#FFFFFF"
            />
            <path
              d="M274 335.6h-9.7c-67.8 0-123 55.2-123 123s55.2 123 123 123 123-55.2 123-123v-9.7H274V335.6z m93.4 132.8c-4.9 52.6-49.3 93.9-103.1 93.9-57.1 0-103.6-46.5-103.6-103.6 0-53.8 41.3-98.2 93.9-103.1v112.8h112.8z"
              fill="#005BFF"
            />
            <path
              d="M297.2 325.2v94.7h94.7c0-52.3-42.4-94.7-94.7-94.7z"
              fill="#005BFF"
            />
            <path
              d="M150 288.8m-11.9 0a11.9 11.9 0 1 0 23.8 0 11.9 11.9 0 1 0-23.8 0Z"
              fill="#FFFFFF"
            />
            <path
              d="M189 288.8m-11.9 0a11.9 11.9 0 1 0 23.8 0 11.9 11.9 0 1 0-23.8 0Z"
              fill="#FFFFFF"
            />
            <path
              d="M222.1 300.7h61.3c1.6 0 2.8-1.3 2.8-2.8v-17.5c0-1.6-1.3-2.8-2.8-2.8h-61.3c-1.6 0-2.8 1.3-2.8 2.8v17.5c0 1.6 1.3 2.8 2.8 2.8z"
              fill="#FFFFFF"
            />
            <path
              d="M912.9 732.5c-47 0-86.3 33.5-95.3 77.8H701.9c-11.7 0-20.2-2.3-23.2-6.3-2-2.7-2-7-2-9v-51.1h109.9c37.5 0 67.9-30.5 67.9-67.9V235.2c0-37.5-30.5-67.9-67.9-67.9h-706c-37.5 0-67.9 30.5-67.9 67.9v440.7c0 37.5 30.5 67.9 67.9 67.9h557.2V795c0 4.8 0 19.3 9.9 32.4 10.9 14.4 29.1 21.7 54.2 21.7h308.2v-19.4c0-53.6-43.6-97.2-97.2-97.2zM80.6 705.1c-16.1 0-29.1-13.1-29.1-29.1V235.2c0-16.1 13.1-29.1 29.1-29.1h705.9c16.1 0 29.1 13.1 29.1 29.1v440.7c0 16.1-13.1 29.1-29.1 29.1H80.6z m832.3 105.2h-55.1c8-22.7 29.7-39 55.1-39s47.1 16.3 55.1 39h-55.1z"
              fill="#005BFF"
            />
            <path
              d="M670.8 329.4H461.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h209.7c5.4 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.8-9.7z"
              fill="#005BFF"
            />
            <path
              d="M670.8 402.7H461.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h209.7c5.4 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.8-9.7zM670.8 476.1H525.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h145.6c5.4 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7z"
              fill="#06F3FF"
            />
            <path
              d="M670.8 549.4H530.1c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7h140.7c5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7z"
              fill="#005BFF"
            />
          </svg>
        </div>
      </div>

      <div className="w-1/2">
        <div className="flex flex-col justify-center items-center">
         <div className="mb-3">
          <h2 className="text-3xl font-bold text-center mb-3">BIENVENIDO AL LOGIN</h2>
         </div>
        </div>
        <form className="flex flex-col px-40" onSubmit={logeoUsuario}>
         <div className="mb-4 col-span-3">
              <label
                htmlFor="nombre"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Usuario:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Ingresa tu Usuario"
                name="usuario"
                required
              />
            </div>

            
            <div className="mb-4 col-span-3 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña:
              </label>
              <div className="flex items-center">
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  name="password"
                />
                <div
                  className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    ) : (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z"
                        ></path>
                      </>
                    )}
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4 col-span-6">
            <p className="text-red-500 text-xl font-bold mb-4">{errorMessage}</p>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                {cambiarBoton ? "Cargando..." : "Iniciar Sesion"}
              </button>
            </div>


         </form>
      </div>
    </div>
  );
}
