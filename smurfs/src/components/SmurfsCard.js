import React from 'react';
import styled from "styled-components";

const Smurf = styled.div`
  font-size:18px;
  border:1px solid black;
  text-align:center;
  border-radius:10px;
  padding:5px;
  margin: 15px;
  color:black;
  background:white;
  padding:2%;
`;



const SmurfsCard = (props) => {

    return (
        <Smurf>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
        </Smurf>
    )
};

export default SmurfsCard;
