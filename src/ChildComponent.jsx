import React from "react";

const ChildComponent=(props)=>{
    const {students,setSelectedStudent,deleteStudent}=props;
    return (
        <>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>Actoin</th>
                </tr>
                {
                    students.map(student=>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td><button onClick={()=>setSelectedStudent(student.id)}>view details</button>
                            <button onClick={()=>deleteStudent(student.id)}>Delete</button></td>
                        </tr>
                        )
                }

            </table>
        </>
    )
}
export default ChildComponent;