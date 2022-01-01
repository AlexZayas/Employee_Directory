import React from "react"
import { useEffect } from "react";
import axios from 'axios';


const Delete = () => {
    useEffect(() => {
        deleteSubmit();
    });

    async function deleteSubmit(){
        axios.delete(`/database/delete/${document.querySelector('#delete').value}`)
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
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
                deleteSubmit()
                .then(res => {console.log('RES: ', res)});
            }} 
            >
                Remove Employee By ID
            <label htmlFor="delete">       
                    <input id="delete" placeholder="Employee ID"/>
                </label>
                <button>Submit</button>
            </form>

        </div>
    )






};




export default Delete;