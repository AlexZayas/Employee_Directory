import React from "react"
import { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeCard from "./EmployeeCard";

const DirectoryDisplay = () => {
    const [employeeData, setEmployeeData] = useState(null);
    const employees = [];

    useEffect(() => {
        displayEmployees();
    });

    async function displayEmployees(){
        if(!employees.length){
            axios.get('/api/employee')
            .then(res => {
                for(let i = 0; i < res.data.rows; i++){
                    employees.push(<EmployeeCard/>)
                }
            });
        }
    }
    
    return(
        <div 
    )
};