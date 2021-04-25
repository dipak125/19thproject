
import React, {Component} from "react";
import ChildComponent from "./ChildComponent";
import Student from "./Student";
export default class App extends Component
{
  constructor()
  {
    super();
    this.state={
      selectedStudent: null,
      students:[
        {
          id:1,
          name:"dipak",
          age:21
        },
        {
          id:2,
          name:"sahil",
          age:22
        },
        {
          id:4,
          name:"mrinal",
          age:24
        }

      ],
      student:{}
    }
  }
  setSelectedStudent=(id)=>{
    this.setState({
        selectedStudent:id
    })
  }
  deleteStudent=(id)=>{
    const student=this.state.students.filter(student=> student.id!==id);
    this.setState({
      students:student
    })
        
  
  }
  render(){
    console.log(this.state.students);
    //const student=this.state.students.find(student=>student.id===this.state.selectedStudent);
    const student = this.state.students.find(student => student.id === this.state.selectedStudent);
    console.log(student);
    return(
        <>
          <ChildComponent students={this.state.students} setSelectedStudent={this.setSelectedStudent} deleteStudent={this.deleteStudent}/>
          <Student student={student}/>
        </>
    )
  }
}