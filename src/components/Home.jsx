import React,{useEffect,useState} from 'react';
import Loader from "react-loader-spinner";
import Card from "./Card.jsx";
import axios from "axios";

function Home(){

    const [data,setData]=useState([]);
    const [off,setOff]=useState(0);
    const [load,setLoad]=useState(true);

    useEffect(()=> {
        async function getData(){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=10&offset="+off);
            setData(res.data);
            setLoad(false);
        }
        getData();
    },[off]);

    function offNext(){
        setLoad(true);
        setOff(off+10);
        console.log(off);
    }
    function offPrev(){
        setLoad(true);
        setOff(off-10);
        console.log(off)
    }

    if(load){
        return (
            <div className="loader">
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} 
                />
            </div>
          );
    }else{
        return (
            <div className="App">
                <h1>The Breaking Bad</h1>
                <p>List of all the characters in breaking bad</p>
                {off>0?<button onClick={()=>offPrev()}>Prev</button>:<p></p>}
                &emsp;
                {off<60?<button onClick={()=>offNext()}>Next</button>:<p></p>}
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
}

export default Home;