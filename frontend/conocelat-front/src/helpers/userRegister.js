import React from 'react'

export const userRegister = (userDate) => {
  return fetch("http://localhost:5173/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userDate),
  })
}
