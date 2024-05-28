import React, { useState } from 'react';
import styled from 'styled-components';
import Employees from './Employee';

const Home = () => {
   const [employees, setEmployees] = useState([
      {
         id: 1,
         Name: 'John',
         imageUrl: 'https://www.shutterstock.com/image-photo/image-young-asian-woman-company-worker-2122700972',
         Gender: 'F',
         Salary: 90000,
         Attendance: 80,
         Holidays: 12,
         Department: 'UX',
         DepartmentSales: 7000,
      },
      {
         id: 2,
         Name: 'Meera',
         imageUrl: 'https://www.shutterstock.com/image-photo/image-young-asian-woman-company-worker-2122700972',
         Gender: 'F',
         Salary: 90000,
         Attendance: 100,
         Holidays: 2,
         Department: 'UX',
         DepartmentSales: 7000,
      },
      // ... other initial employees
   ]);

   const [newEmployee, setNewEmployee] = useState({
      Name: '',
      Gender: '',
      Salary: '',
      Department: ''
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewEmployee({
         ...newEmployee,
         [name]: value
      });
   };

   const addEmployee = () => {
      setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
      setNewEmployee({
         Name: '',
         Gender: '',
         Salary: '',
         Department: ''
      });
     
   };

   const deleteEmployee = (id) => {
      setEmployees(employees.filter(employee => employee.id !== id));
   }
   return (
      <div>
         
            <Heading>Employee Management</Heading>
            <Container>
            {employees.map((emp, id) => (
               <Employees key={id} employees={emp} onDelete={deleteEmployee}/>

            ))}
          
         </Container>
        
         <Form>
            <Label>Name:</Label>
            <Input
               type="text"
               name="Name"
               placeholder="Name"
               value={newEmployee.Name}
               onChange={handleInputChange}
            />
            <Label>Gender:</Label>
            <Select
               name="Gender"
               id="gender"
               value={newEmployee.Gender}
               onChange={handleInputChange}
            >
               <option value="F">Female</option>
               <option value="M">Male</option>
               <option value="others">Others</option>
               <option value="T">Transgender</option>
            </Select>
            <Label>Salary:</Label>
            <Input
               type="number"
               name="Salary"
               placeholder="Salary"
               value={newEmployee.Salary}
               onChange={handleInputChange}
            />
            <Label>Department:</Label>
            <Select
               name="Department"
               id="dp"
               value={newEmployee.Department}
               onChange={handleInputChange}
            >
               <option value="UX">UX</option>
               <option value="backend">Backend</option>
               <option value="cyber">Cyber</option>
               <option value="projectManagement">Project Management</option>
            </Select>
         </Form>
         <Button onClick={addEmployee}>Add Employee</Button>
      </div>
   );
};

export default Home;

const Heading = styled.h1`
margin-left:35%
`
const Container = styled.div`
   display: flex;
   background-color: green;
`;
const Button = styled.button`
   margin-top: 20px;
   padding: 10px 20px;
   background-color: #4CAF50;
   color: white;
   border: none;
   border-radius: 5px;
   cursor: pointer;
  margin-left:49%;
   &:hover {
      background-color: #45a049;
   }
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
   max-width: 400px;
   margin: 20px auto;
   padding: 20px;
   background-color: white;
   border: 1px solid #ccc;
   border-radius: 10px;
`;

const Label = styled.label`
   margin-top: 10px;
   margin-bottom: 5px;
   font-weight: bold;
   background-color: white;
`;

const Input = styled.input`
   padding: 10px;
   margin-bottom: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
   background-color: white;
`;

const Select = styled.select`
   padding: 10px;
   margin-bottom: 10px;
   border: 1px solid #ccc;
   border-radius: 5px;
   background-color: white;
`;
