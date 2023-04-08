import React from 'react'
import Card from './Card'
import { AtraccionesTuristicas } from './Card'

export default function Grilla() {
  return (<>
    <div className="flex flex-wrap justify-center">
      {AtraccionesTuristicas.map((atraccion, index) => (
        <Card atraccion={atraccion} key={index} />
      ))}
    </div></>
  )
}
