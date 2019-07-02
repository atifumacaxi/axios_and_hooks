import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LorenGen() {
    // state = {
    //     lorens: []
    // }

    const [lorens, setLorens] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const alterAPI = () => {
        const menu = document.querySelector(".menu");
        if (refresh) {
            menu.classList.add("show");
            setRefresh(false);
        }
        else {
            setRefresh(true);
            menu.classList.remove("show");
        }
    }

    useEffect(() => {
        
        const fetchData = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setLorens(res.data);
        };
        fetchData();
    }, refresh); 

    return (
        <div>
            <button/>   
            <p onClick={alterAPI}>teste</p>
            {lorens.map(loren => (
                <div className="menu" key={loren.id}>
                    <h2>{loren.title}</h2>
                    <p>{loren.body}</p>
                </div>
            ))}
        </div>
    );
}

export default LorenGen;