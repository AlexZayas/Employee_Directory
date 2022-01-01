import React from "react"
import { useEffect } from "react";
import axios from 'axios';

const NewHire = () => {
    useEffect(() => {
        newHireSubmit();
    });

    async function newHireSubmit(){
        axios.post('/database/addEmployee', { 
            firstName: document.querySelector('#firstName').value,
            lastName: document.querySelector('#lastName').value,
            picture: document.querySelector('#picture').value,
            jobTitle: document.querySelector('#jobTitle').value, 
            department: document.querySelector('#department').value,
            startDate: document.querySelector('#startDate').value,
            phoneNumber: document.querySelector('#phoneNumber').value,
            email: document.querySelector('#email').value,
            location: document.querySelector('#location').value,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="input-params">
             <header>
            <button id="homepage" onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/directory';
                }}>Homepage</button>
            </header>
            <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    newHireSubmit()
                    .then(res => {console.log('RES: ', res)});
                }} 
            >
                <h4>Add New Hire</h4>
                <label htmlFor="firstName">
                FirstName
                    <input id="firstName" placeholder="First name"/>
                </label>
                <label htmlFor="lastName">
                LastName
                    <input id="lastName" placeholder="Last name"/>
                </label>
                <label htmlFor="picture">
                Picture
                    <input id="picture" placeholder="Picture"/>
                </label>
                <label htmlFor="jobTitle">
                JobTitle
                    <input id="jobTitle" placeholder="Job title"/>
                </label>
                <label htmlFor="department">
                Department
                    <input id="department" placeholder="Department"/>
                </label>
                <label htmlFor="startDate">
                StartDate
                    <input id="startDate" placeholder="MM-DD-YYYY"/>
                </label>
                <label htmlFor="phoneNumber">
                PhoneNumber
                    <input id="phoneNumber" placeholder="(XXX)-XXX-XXXX"/>
                </label>
                <label htmlFor="email">
                Email
                    <input id="email" placeholder="Email"/>
                </label>
                <label htmlFor="location">
                Location
                    <input id="location" placeholder="State"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewHire