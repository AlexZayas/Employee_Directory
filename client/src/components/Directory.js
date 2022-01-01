import React from "react"
import { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeCard from "./EmployeeCard";


const TITLES = ['SoftwareEngineer','Manager', 'HumanResources'];
const DEPARTMENTS = ['SoftwareDevelopment', 'Management', 'HR'];


const Directory = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');

    useEffect(() => {
        displayEmployees();
    }, []);


    let employees = employeeData.map((empl, i) => <EmployeeCard data={empl}/>)


    async function displayEmployees(){
        try {
            let result = await axios.get('/database/showAll');
            setEmployeeData(result.data);               
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div>
            <header id="header">
                <button id="create" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/create';
                }}>Create New Employee</button>
                <button id="update" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/update';
                }}>Update Employee Information</button>
                <button id="delete" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/delete';
                }}>Delete Employee</button>
            </header>
            
            <div className="search-params">
                <form>
                    <label htmlFor="title">
                        Title
                        <select id="title" onChange={(e) => setTitle(e.target.value)} onBlur={(e) => setTitle(e.target.value)}>
                            <option/>
                            {
                                TITLES.map((title) => (
                                    <option value={title} key={title}>
                                        {title}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label htmlFor="department">
                        Department
                        <select id="department" onChange={(e) => setDepartment(e.target.value)} onBlur={(e) => setDepartment(e.target.value)}>
                            <option/>
                            {
                                DEPARTMENTS.map((department) => (
                                    <option value={department} key={department}>
                                        {department}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        <p>
            {employees}
        </p>
        </div>
    )
};


export default Directory