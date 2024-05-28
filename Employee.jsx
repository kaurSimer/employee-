import Recat from 'react';
import styled from 'styled-components';
const Employee = ({employees, onDelete}) =>{


return(
   <Container>
    <img src={employees.imageUrl} />
        <Name>Name: {employees.Name}</Name>
        <Gender>Gender: {employees.Gender}</Gender>
        <Salary>Salary: {employees.Salary}</Salary>
        <Department>DEpartment: {employees.Department}</Department>
        <Attendance>Attendance: {employees.Attendance}</Attendance>
        <Holidays>Holidays: {employees.Holidays}</Holidays>
         <Button onClick={() => onDelete(employees.id)}>Delete</Button>
</Container>        
 
)
}
export default Employee;
const Container = styled.div`
background-color: #ffff;
height: 8%;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px;
 margin: 10px 10px;
flex-direction: column;
 border-radius: 5px;
 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 align-self: center;
`
const Name = styled.h3`
font-size: 18px;
margin: 0;
color: #333;
background-color:white;
display: flex;
align-items: center;
`
const Salary = styled.h3`
font-size: 18px;
margin: 0;
color: #333;
display: flex;
align-items: center;
background-color:white;
`
const Department = styled.h3`
font-size: 18px;
margin: 0;
color: #333;
display: flex;
align-items: center;
background-color:white;
`
const Attendance = styled.h3`
font-size: 18px;
margin: 0;
color: #333;
display: flex;
align-items: center;
background-color:white;
`
const Gender = styled.h3`
font-size: 18px;
margin: 0;
color: #333;
display: flex;
align-items: center;
background-color:white;
`
const Holidays = styled.h3`
font-size: 18px;
margin: 0;
color: #333;
display: flex;
align-items: center;
background-color:white;
`
const Button = styled.button`
   margin-top: 20px;
   padding: 10px 20px;
   background-color: #4CAF50;
   color: white;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   
   &:hover {
      background-color: #45a049;
   }
`;