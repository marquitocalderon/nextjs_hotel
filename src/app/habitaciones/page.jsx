"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    numero_habitacion: { value: '', type: 'number' },
    tipo_habitacion: { value: '', type: 'text' },
    precio: { value: '', type: 'number' },
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [fieldName]: {
        ...formData[fieldName],
        value,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!selectedFile) {
        alert("seleccione una imagen por favor")
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('imagen', selectedFile);

      // Agregar campos adicionales al objeto FormData
      Object.entries(formData).forEach(([fieldName, fieldData]) => {
        formDataToSend.append(fieldName, fieldData.value);
      });

      // Enviar formData al servidor utilizando axios
      const response = await axios.post('http://localhost:4000/imagen', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // La respuesta del servidor podría contener información sobre la imagen
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar la imagen:', error);
    }
  };

  return (
    <div>
      <h1>Subir Imagen</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput">Selecciona una imagen:</label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />

        {/* Iterar sobre los campos adicionales */}
        {Object.entries(formData).map(([fieldName, fieldData]) => (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:</label>
            <input
              type={fieldData.type}
              id={fieldName}
              name={fieldName}
              value={fieldData.value}
              onChange={(event) => handleInputChange(event, fieldName)}
            />
          </div>
        ))}

        <button type="submit">Enviar</button>
      </form>

      {selectedFile && (
        <div>
          <h2>Imagen seleccionada:</h2>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Imagen seleccionada"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
}
