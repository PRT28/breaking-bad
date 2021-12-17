import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt=""></img>
            <h1>{props.name}</h1>
            <p>{props.status}</p>
            <Link to={"/info/"+props.id}><Button variant="contained">View More..</Button> </Link>
        </div>
    )
}

export default Card;