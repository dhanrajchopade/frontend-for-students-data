import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import StudentDetails from "./pages/StudentDetails";
import Students from "./pages/Students";
import './App.css'

function App(){

const [searchTerm, setSearchTerm] = useState('')
const handleSearch = (term)=>{
    setSearchTerm(term)
}

    return(
<>
<Header onSearch={handleSearch}/>
<Routes>
<Route path="/" element={<Students searchTerm={searchTerm}/>}/>
<Route path="/students/:id" element={<StudentDetails/>}/>
</Routes>
</>
    )
}

export default App
