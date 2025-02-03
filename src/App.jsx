
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import LoadPDF from './pages/LoadPDF'

function App() {
    return (
        <>
            <div>
                <main className='main-content'>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                        <Route path="/loadpdf" element={<LoadPDF />}></Route>
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
