"use client"
import React, { Fragment, useState } from 'react'

export default function Buscador() {
    const [buscador, setBuscador] = useState("");
  return (
    <Fragment>
        <label
                  htmlFor="buscador"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Buscador:
                </label>
                <input
                  id="buscador"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Busca tu Hotel"
                  onChange={(e) => setBuscador(e.target.value)}
                  value={buscador}
                />
    </Fragment>
  )
}
