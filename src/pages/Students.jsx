import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";

const Students = ()=>{
    const {data,loading,error} = useFetch("https://students-app-backend.vercel.app/students")
    const [filter, setFilter] = useState("all")
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event)=>{
        setSearchTerm(event.target.value)
    }

const filteredStudents = data?.filter(student =>(filter==="all" || (student.gender && student.gender.includes(filter))) && (student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.skills.some(skill=>skill.toLowerCase().includes(searchTerm.toLowerCase()))))

    return(
        <>
        <div className="bg-light">
<div className="container">

<div className="d-flex justify-content-between align-items-center mb-3">

<h1>Students</h1>
<select id="selectGender" className="form-select" style={{width:'auto'}} onChange={(e)=>setFilter(e.target.value)} defaultValue="all">
<option value="" disabled>Filter by Gender</option>
<option value="all">All</option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Other">Other</option>
</select>
</div>

<div className="form-inline mb-3">
<input type="search" placeholder="Search by name and skills..." className="form-control mr-sm-2" value={searchTerm} onChange={handleSearchChange} aria-label="Search" />


</div>

{loading && <p>Loading...</p>}
{error && <p>Error: {error.message}</p>  }

<div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-4">
{filteredStudents?.map((student)=>(
<div className="col" key={student._id}>
<Link to={`/students/${student._id}`} style={{textDecoration:"none"}}>
<div className='card h-100 position-relative'>
<img src={student.profilepicUrl} className="card-img-top" alt={student.name} />
<div className="z-3 position-absolute top-0 start-0 p-2 bg-light text-dark">
                      <span>{student.gender}</span>
                    </div>
<div className="card-body">
<p className="card-text"> Previous Year Marks: {student.previousYearMarks}%</p>
<h2 className="card-title">{student.name}</h2>
</div>

</div>
</Link>
</div>
))}






</div>



</div>
        </div>
        
        
        </>
    )
}

export default Students