"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
export default function Recuperar() {
    const [cambiarBoton, setCambiarBoton] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setCambiarBoton(true)
        const formDatos = new FormData(e.target);
    
        try {
          // Realizar la solicitud HTTP con Axios
          const response = await axios.post('http://localhost:4000/send-email', {
            correo: formDatos.get('correo'),
          });
    
          // Verificar la respuesta del servidor
          if (response.status === 200) {
            // Después de enviar correctamente el formulario, mostrar el SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Se Envio correctamente',
              text:
                'Hemos enviado a su correo electronico un link para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.',
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
            setCambiarBoton(false);
          }
        } catch (error) {
          console.error('Error al enviar el formulario:', error);
          // Manejar errores según sea necesario
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
          });
          setCambiarBoton(false);
        }
      };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          

<svg width="100px" height="100px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M579.3 245c-27.6-18.8-47.5-38.7-60.1-53.2-12.6 14.5-32.6 34.3-60.3 53.2-51.7 35.2-110.9 54.6-176.4 57.9v232.9c0 8.5 1.1 18.4 3.4 29.4 0 0 28.5 179.4 233.3 272.1 0 0 148.7-56.3 214-214 15.2-34.7 22.4-65.8 22.4-87.5V302.9c-65.5-3.3-124.7-22.7-176.3-57.9z" fill="#FFFFFF" /><path d="M618.8 500.7l44.5-95.4H600l-44.5 95.4zM422.2 405.3l-44.5 95.4H441l44.5-95.4zM574.4 405.3h-63.3l-44.5 95.4h63.3zM299.3 405.3v95.4h52.8l44.5-95.4zM738.9 500.7v-95.4h-50l-44.5 95.4z" fill="#E6E6E6" /><path d="M519.1 837.3c-80.4-34.8-138.6-91.1-177.2-147.5-20.9-7-41-14.5-60.2-22.2 8.1 15.2 17.2 30.4 27.3 45 35.7 51.9 99.7 122.6 201.8 164.5 2.7 1.1 5.5 1.7 8.3 1.7 2.8 0 5.6-0.5 8.3-1.6 74.3-30.6 128.4-76.3 166.1-119-16.7-0.8-33.9-2.1-51.4-3.8-33.1 32.4-73.9 61.7-123 82.9zM891.3 553.2c-7.4-6.6-15.9-13.3-25.5-19.9-19.5-13.7-43.2-27.4-70.3-40.6V285.5c0-12.2-9.8-22.1-21.8-22.1-64.5-0.3-122.3-17.6-171.9-51.4-38.5-26.2-59.2-53.9-64.7-61.8-4.1-5.9-10.8-9.5-18-9.5-7.1 0-13.9 3.5-18 9.4-5.5 7.9-26.3 35.6-64.8 61.8-49.7 33.8-107.6 51.1-172 51.4-12 0.1-21.8 10-21.8 22.1V378c-12.4 0.8-24.1 1.9-35.1 3.4-24.7 3.3-45.7 8.3-62.8 14.9-29 11.3-45.9 27.1-50.3 47-4.2 19 3.6 39.4 23 60.8l0.1 0.1c0.4 0.4 0.7 0.8 1.1 1.2 18.1 19.4 45.5 39.2 81.5 58.9 2.4 1.3 4.9 2.7 7.4 4 13.4 7.1 27.8 14.1 42.9 20.8 4.4 16.6 10.6 33.9 18.3 51.4 17.8 7.7 36.6 15.1 56.3 22.2-10.6-18.4-19.2-36.5-25.8-53.5 55.3 21.1 117.9 39.7 183.8 54.3 74 16.4 146.4 26.4 211.1 29.5-10.1 14.5-21.4 28.9-34.1 42.9 17.1 1.4 33.8 2.4 49.9 2.9 7.2-9.1 13.6-17.9 19.3-26.2 4.2-6.1 8.2-12.3 12.1-18.6 13.9-0.1 27.2-0.5 40.1-1.4 33.5-2.2 61.9-6.9 84.6-14 5-1.6 9.7-3.2 14.1-5 8.7-3.5 16.3-7.5 22.7-11.8-3.3-5.6-7.5-11-12.1-16.1-6.6 4.4-14.9 8.3-24.7 11.7-21.7 7.6-50.9 12.9-85.9 15.2-8.7 0.6-17.7 1-27 1.2 26.8-48.8 42.6-99.1 42.6-138.1V515c28 14.2 51.8 28.8 70.3 43.1 4.4 3.4 8.4 6.7 12.2 10.1 16.3 14.5 34.8 35.8 30.6 55-0.7 3-1.9 5.8-3.6 8.6 5.1 5.5 9.4 11 12.8 16.4 5.2-6.3 8.6-13.2 10.3-20.7 5-23-7.4-48-36.9-74.3z m-681.7-6.6c-0.7-0.4-1.5-0.8-2.2-1.2-33.9-18.7-59.6-37.7-75.5-55.3-0.1 0-0.1 0.1-0.2 0.1-6.3-6.4-10.4-13.4-11.9-16.1-5.6-9.7-7.8-18.6-6-26.6 4.8-21.9 39-38.3 93.6-46 10.9-1.5 22.6-2.7 35.1-3.5v137.8c0 9 0.9 18.7 2.5 28.8-12.4-5.9-24.3-11.9-35.4-18z m546-10.8c0 31.7-15.5 83.9-48.8 137.7-66.4-2.3-142-12.4-219.5-29.6-71.3-15.8-138.6-36.2-196.6-59.5-5.5-18.8-8.2-35.5-8.2-48.6V302.9c65.5-3.3 124.7-22.7 176.4-57.9 27.7-18.8 47.6-38.7 60.3-53.2 12.6 14.5 32.5 34.3 60.1 53.2 51.6 35.2 110.8 54.6 176.3 57.9v232.9z" fill="#005BFF" /><path d="M242.2 443.2c-40.1 2.5-73 8.7-97.6 18.3-9.6 3.7-17.9 8-24.8 12.7 3 5.2 7.1 10.5 12.1 16.1 21.2-14 59.5-23.5 110.3-26.9v-20.2z" fill="#06F3FF" /><path d="M119.7 474.1c1.5 2.7 5.7 9.7 11.9 16.1 0.1 0 0.1-0.1 0.2-0.1-4.9-5.5-9-10.8-12.1-16 0.1 0 0.1 0 0 0zM917.8 648.2c-3.5-5.4-7.8-10.9-12.8-16.4-4.1-4.4-8.6-8.9-13.7-13.4-22.8-20.3-56.1-41.2-97-61.1-0.4 2.7-2.2 14.7-3.4 20.7 36.8 18.3 66.6 37.2 87.1 55.4 4.2 3.7 8.5 7.9 12.5 12.3 4.6 5 8.8 10.5 12.1 16.1 5.1 8.7 7.9 17.9 6 26.6-5.8 26.1-53.9 44.6-128.6 49.5-21.8 1.4-45.4 1.7-70.2 0.9-16.1-0.5-32.8-1.5-49.9-2.9-54.2-4.5-112.8-13.5-172.6-26.8-57.7-12.8-112.7-28.6-162.3-46.5-19.7-7.1-38.5-14.5-56.3-22.2-21.2-9.2-41-18.8-59-28.6-65.7-35.9-101.5-73-95.8-99.1 0.7-3 1.9-5.9 3.6-8.6l-0.1-0.1c-0.9-0.9-6.6-6.7-12.8-16.3-5.2 6.3-8.6 13.2-10.3 20.7-4.3 19.4 3.9 40.3 24.3 62.1 18.1 19.4 45.5 39.2 81.5 58.9 24.4 13.3 51.9 26.2 81.8 38.2 19.1 7.7 39.2 15.1 60.2 22.2 44 14.8 91.5 28 140.9 38.9 54.8 12.1 108.7 20.8 159.2 25.7 17.6 1.7 34.8 3 51.4 3.8 14.7 0.7 28.9 1.1 42.7 1.1 15.6 0 30.7-0.5 45-1.4 40.9-2.7 74.1-9.1 98.7-19 27.7-11.2 43.9-26.7 48.2-46.1 3.1-14.2-0.4-29.1-10.4-44.6z" fill="#06F3FF" /><path d="M117.4 504.1s-0.1 0-0.1-0.1c0 0 0.1 0 0.1 0.1z" fill="#06F3FF" /></svg>
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Recuperación de contraseña
        </h1>
        <p className="text-sm text-gray-600 text-center mt-8 mb-6">
          Introduce tu correo electrónico para restablecer tu contraseña
        </p>
        <form onSubmit={handleSubmit}> 
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="correo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4"
          >
            {cambiarBoton ? "Enviando..." : "Enviar"}
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Volver a <a href="/login" className="text-cyan-600">
              Iniciar sesión
            </a>
          </p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2023 ALUMNOFISI.COM
        </p>
      </div>
    </div>
  );
}
