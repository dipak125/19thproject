import React from "react";

const Student=(props)=>{
    const {student}=props;
    console.log(student);
    return (
        <>
            <h1>Student Detais:</h1>
            {(student?.id)?<div>
                <h2>id:{student.id}</h2>
                <h2>name:{student.name}</h2>
                <h2>age:{student.age}</h2>
            </div>:<div><h2>Details not found</h2></div>}
        </>
    )
}
export default Student;