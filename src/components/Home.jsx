import React,{useEffect,useState} from 'react';
import Loader from "react-loader-spinner";
import Card from "./Card.jsx";
import axios from "axios";
import { logEvent } from "firebase/analytics";
import {analytics} from '../firebaseConfig';
import InfiniteScroll from 'react-infinite-scroll-component';


function Home(){

    const [data,setData]=useState([]);
    const [load,setLoad]=useState(true);
    const [off,setOff]=useState(8);
    logEvent(analytics,"homepage_visited", {
        index: 1
    });

    useEffect(()=> {
        async function getData(){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=8&offset=0");
            setData(res.data);
        }
        getData();
    },[]);

    async function changeData(e){
        const text=e.target.value;
        if(text.length>=3){
            logEvent(analytics,"search",{
                value:text
            });
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?name="+text);
            setData(res.data);
        }
        if(text===""){
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=8&offset=0");
            setData(res.data);
        }
    }

    const fetchData= async()=>{
        setOff(off+8);
        if(off>62){
            setLoad(false);
        }else{
            console.log(off);
            const res = await axios.get("https://www.breakingbadapi.com/api/characters?limit=8&offset="+off);
            const arr=res.data;
            setData([...data,...arr]);
        }
    }
        return (
            <div className="App">
                <h1>The Breaking Bad</h1>
                <p>List of all the characters in breaking bad</p>
                <label>Search:</label><input id="t" type="text" onInput={(e)=>changeData(e)}></input>
                <div id="scroll" className="container">
                    <div className="inner">
                    <InfiniteScroll
                        dataLength={data.length}
                        next={fetchData}
                        hasMore={load}
                        loader={<Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                          />}
                        scrollableTarget="scroll"
                    >
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
                    </ InfiniteScroll>
                    </div>
                </div>
            </div>
      );
    }

export default Home;