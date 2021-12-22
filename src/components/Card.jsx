import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import cross from './cross.png';

function Card(props){

    if(props.status==="Alive"){
        return(
            <div className="card">
                <img src={props.image} alt=""/>
                <h1>{props.name}</h1>
                <p>{props.status}</p>
                <Link to={"/info/"+props.id}><Button variant="contained">View More</Button> </Link>
            </div>
        )
    }else{
        return(
            <div className="card">
                <div class="i">
                    <img src={props.image} alt=""/>
                    <img class="cross" src={cross} alt="" />
                </div>
                <h1>{props.name}</h1>
                <p>{props.status}</p>
                <Link to={"/info/"+props.id}><Button variant="contained">View More</Button> </Link>
            </div>
        )
    }
    
}

export default Card;