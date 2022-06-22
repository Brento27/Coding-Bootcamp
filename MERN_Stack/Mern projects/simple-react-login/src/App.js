import React, { useState } from "react"
import Form from "./components/Form"
import data from "./data/Users"

import "./styles.css"

function App() {
  // React States
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [database, setDatabase] = useState(data)

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          <Form database={database} isSubmitted={isSubmitted} />
        )}
      </div>
    </div>
  )
}

export default App
