import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";




function Info(props){

    let [data,setData]=useState([]);
    let { id } = useParams();

    async function getData(){
        const res = await axios.get("https://www.breakingbadapi.com/api/characters/"+id);
        setData(res.data);
        console.log(data);
    }


    useEffect(()=> { 
        getData();
    },);

        return(
            <>
             {data && (<div className="info">
            <img src={data.img} alt="" />
            <h1>{data.name}</h1>
            <p>Appearance: {data.appearance}</p>
            <p>Birthday: {data.birthday}</p>
            <p>Category: {data.category}</p>
            <p>Nickname: {data.nickname}</p>
            <p>Occupation: {data.occupation}</p>
            <p>Portrayed: {data.portrayed}</p>
            <p>Status: {data.status}</p>
        </div>)}</>
        );
    
    

   
}

export default Info;