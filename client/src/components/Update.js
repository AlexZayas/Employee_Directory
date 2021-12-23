import React from "react"
import { useEffect } from "react";
import axios from 'axios';


const Update = () => {
    useEffect(() => {
        updateSubmit();
    });

async function updateSubmit(){
    axios.put('/database/update', {
        id: document.querySelector('#id').value,
        columnName: document.querySelector('#columnName').value,
        updatedInformation: document.querySelector('#updatedInformation').value,
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
};

return (
    <div className="input-params">
        <form
        onSubmit={(e) => {
            e.preventDefault();
            updateSubmit()
            .then(res => {console.log('RES: ', res)});
        }} 
        >
            Update Employee Information
        <label htmlFor="employeeID">
                EmployeeID
                    <input id="id" placeholder="Employee ID"/>
                </label>
                <label htmlFor="columnName">
                ColumnName
                    <input id="columnName" placeholder="What would you like to update?"/>
                </label>
                <label htmlFor="updatedinfo">
                NewInformation
                    <input id="updatedInformation" placeholder="Please enter the new information"/>
                </label>
                <button>Submit</button>
            </form>
     </div>
    )
};

export default Update;