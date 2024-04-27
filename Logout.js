import React from 'react'

export default function Logout() {
    localStorage.removeItem("token")
  return (
    <div>
        <center><h1>You Have Loggedout successfully</h1></center>
    </div>
  )
}
