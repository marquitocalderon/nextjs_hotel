"use client";
import React, { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
export default function Page() {
  const [token, setToken] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const router = useRouter();
  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const url = "http://localhost:4000/comprobar";

      const response = await axios.post(url, { token: token });



      setShowAdditionalFields(true);
    } catch (error) {
      // Manejar errores en caso de que la solicitud POST falle
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const handleAdditionalFieldsSubmit = async () => {
    try {
      const enviarDatos = {
        usuario: username,
        correo : correo,
        password: newPassword,
      };
      const url = "http://localhost:4000/restablecer";

      const response = await axios.post(url, enviarDatos);

      if (response.status === 200) {
        // Después de enviar correctamente el formulario, mostrar el SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Se Cabmio  correctamente la contraseña',
          text:
            'Te redirigeremos al login para que pruebes tu nueva contraseña',
        }).then(function (response) {
            
            router.push('/login')
        });
          
      } else {
        // Manejar otros casos según sea necesario
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
        });
      }
    } catch (error) {
      // Manejar errores en caso de que la solicitud POST falle
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-5">
        <label>Ingresa el Token:</label>
        <input
          className="border"
          type="text"
          value={token}
          onChange={handleTokenChange}
        />
        <button onClick={handleSubmit}>VERIFICAR TOKEN</button>
      </div>

      {showAdditionalFields && (
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col gap-2">
            <label>Ingresa tu Usuario:</label>
            <input
              type="text"
              className="border"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <label>
              Ingresa tu Correo Asociado a este Usuario cuando creaste la
              cuenta:
            </label>
            <input
              type="email"
              className="border"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div >

          <div className="flex flex-col gap-2"> 
          <label>Ingresa la Nueva Contraseña:</label>
          <input
            type="password"
            className="border"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          </div>

          <button
            className="px-4 py-2 bg-blue-500 hover:to-blue-300 text-white"
            onClick={handleAdditionalFieldsSubmit}
          >
            Cambiar Contraseña
          </button>
        </div>
      )}
    </div>
  );
}
