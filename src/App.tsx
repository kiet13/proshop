import React from "react"
import "App.less"
import "App.scss"
import { Routes, Route } from "react-router-dom"
import AppLayout from "components/AppLayout"

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}></Route>
    </Routes>
  )
}

export default App
