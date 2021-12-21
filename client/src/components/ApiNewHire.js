import React from "react"
import { useEffect } from "react";
import axios from 'axios';


const ApiNewHire = () => {
    useEffect(() => {
        apiNewHireSubmit();
    });

    async function apiNewHireSubmit(){
        axios.get('/api/employee')
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    };

    return(
        <div className="input-params">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                apiNewHireSubmit()
                .then(res => {console.log('RES: ', res)});
            }} 
            >
                <h4>Add ApiNew Hire</h4>
                <button>Submit</button>
            </form> 
        </div>
    )




};



export default ApiNewHire