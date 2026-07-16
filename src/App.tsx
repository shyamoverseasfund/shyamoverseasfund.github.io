import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chairman from './pages/Chairman'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chairman" element={<Chairman />} />
    </Routes>
  )
}
