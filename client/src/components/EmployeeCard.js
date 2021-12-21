import React from "react"
import { useState, } from "react";
import axios from 'axios';

const EmployeeCard = () => {
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [picture, setPicture] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [department, setDepartment] = useState("");
    const [startDate, setStartDate] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");


    return(
    <div className="employeeBox">
      <img id="picture" src={picture} alt="EmployeePhoto" width="55" height="65"></img>
      <li id="id">{id}</li>
      <li id="firstName">{firstName}</li>
      <li id="lastName">{lastName}</li>
      <li id="jobTitle">{jobTitle}</li>
      <li id="department">{department}</li>
      <li id="startDate">{startDate}</li>
      <li id="phoneNumber">{phoneNumber}</li>
      <li id="email">{email}</li>
      <li id="location">{location}</li>
    </div>
    );

};




export default EmployeeCard;