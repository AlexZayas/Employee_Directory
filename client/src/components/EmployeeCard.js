import React from "react"

const EmployeeCard = ({data}) => {
  const { picture, _id, first_name, last_name, job_title, department, start_date, phone_number, email, location } = data;

    return(
    <article className="employeeDisplay">
      <ul className="cardItems">
      <img className="picture" src={picture} alt="EmployeePhoto" width="55" height="65"></img>
      <li className="id">ID: {_id}</li>
      <li className="firstName">First Name: {first_name}</li>
      <li className="lastName">Last Name: {last_name}</li>
      <li className="jobTitle">Title: {job_title}</li>
      <li className="department">Department: {department}</li>
      <li className="startDate">Start Date: {start_date}</li>
      <li className="phoneNumber">Phone: {phone_number}</li>
      <li className="email">Email: {email}</li>
      <li className="location">Location: {location}</li>
      </ul>
      </article>
    );
};




export default EmployeeCard;