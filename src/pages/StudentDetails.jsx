import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const StudentDetails = ()=>{
    const {id} = useParams()
    const {data:student, loading, error} = useFetch(`https://students-app-backend.vercel.app/students/${id}`)
    if (loading) {
        return <div>Loading Students details...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      if (!student) {
        return <div>Student not found</div>;
      }
      return(
        <>
        <div className="bg-light">
<div className="container">
<h1 className="py-3">{student.name}</h1>
<p>Last Year Marks: <strong>{student.previousYearMarks}%</strong> </p>

<div className="row">
<div className="col-md-6">
    <img src={student.profilepicUrl} alt={student.name} className="img-fluid" />
</div>


<div className="col-md-6">
<p>Dress Code: {student.dressCode}</p>
<p>
    Fees Pending: ₹{student.feesPending}
</p>
<p>Location: {student.location}</p>


{/* Parents Section - Bottom Right */}
<div className="mt-6">
<h2>Parents: ({student.parentsDetails? student.parentsDetails.length : 0})</h2>
<div className="d-flex flex-wrap">
{student.parentsDetails && 
student.parentsDetails.map((parent)=>(
    <div key={parent.name} className="card me-3 mb-3" style={{ width: '200px' }}>
<img src={parent.imgUrl} alt={parent.name}  className="card-img-top rounded-circle"  style={{ width: '90px', height: '80px', margin: '10px auto' }}  />
<div className="card-body text-center">
    <strong className="card-title">{parent.name}</strong>
    <p className="card-text">{parent.relationwithStudent}</p>
    <p className="card-text">Designation: {parent.designation}</p>
</div>
</div>
))}
</div>
</div>

<button style={{width:'180px'}} className="btn btn-primary my-4">Select</button>
</div>
</div>
{/* Details Section */}
<div className="col-md-6 my-4">
    <h2>Details:</h2>
    <div className="card">
        <div className="card-body">
            <p>{student.details}</p>
        </div>
    </div>
</div>

{/* Students Skills Section */}
<div className="col-md-6 my-4">
    <h2>Student Skills:</h2>
    {student.skills && student.skills.map((skill,index)=>(
        <span key={index} className="badge bg-secondary me-2">
            {skill}
        </span>
    ))}
</div>

</div>
        </div>  
        </>
      )
}


export default StudentDetails