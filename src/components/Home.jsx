import React,{useEffect,useState} from 'react';

import Card from "./Card.jsx";
import axios from "axios";

function Home(){

    const [data,setData]=useState([]);

    useEffect(()=> {
        async function getData(){
            const res = await axios.get(`https://www.breakingbadapi.com/api/characters`);
            // console.log(res)
             setData(res.data);
            console.log(data);
        }
        getData();
    },[]);

    return (
        <div className="App">
            <h1>The Breaking Bad</h1>
            <p>List of all the characters in breaking bad</p>
            <div className="container">
                {
                data.map((d,index)=>
                    <Card
                    id={d.char_id}
                    name={d.name}
                    status={d.status}
                    image={d.img}
                    />
                )
                }
            </div>
        </div>
  );
}

export default Home;