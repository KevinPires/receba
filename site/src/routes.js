import { BrowserRouter, Routes, Route } from "react-router-dom";


import Pet from './pages/pet.js'

export default function Index(){
   return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Pet/>} />
    </Routes>
    </BrowserRouter>


   ) 
}