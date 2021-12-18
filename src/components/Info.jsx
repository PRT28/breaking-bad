import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";




function Info(props){

    let [data,setData]=useState([]);
    let { id } = useParams();
    


    useEffect(()=> { 
        const getData= async() =>{
            try{
                const res = await axios.get("https://www.breakingbadapi.com/api/characters/"+id);
                setData(res.data[0]);
                console.log(data);
            } catch(e){
                console.log(e)
            }
        }
        getData();
    },[]);

        if(data.appearance !== undefined){

        return(
            <div className="info">
                <img src={data.img} alt="" />
                <h1>{data.name}</h1>
                {data.appearance.length>0?<p>Appearance: {data.appearance.join(',')}</p>:<p>Appearance: None</p>}
                {data.better_call_saul_appearance.length>0? <p>Better call saul appearance: {data.better_call_saul_appearance.join(',')}</p> : <p>Better call saul appearance: None</p>}
                <p>Birthday: {data.birthday}</p>
                <p>Category: {data.category}</p>
                <p>Nickname: {data.nickname}</p>
                {data.occupation.length>0?<p>Occupation: {data.occupation.join(',')}</p>:<p>Occupation: None</p>}
                <p>Portrayed: {data.portrayed}</p>
                <p>Status: {data.status}</p>
            </div>
    );
        }
        else{
            return(
                <div className="info"></div>
            )
        }
}

export default Info;