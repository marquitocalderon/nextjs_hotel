import axios from 'axios';

export default async function axiosUsuarios(url, token) {
  try {
    const respuesta = await axios.get(url);

    const datosServidor = respuesta.data;
    return datosServidor;
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    throw error;
  }
}


