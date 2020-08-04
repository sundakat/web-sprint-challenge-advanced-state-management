import React from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteSmurf } from '../actions/actions';
import { CardActions, IconButton, Tooltip } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';


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
    const handleDelete = () => {
        props.deleteSmurf(props.smurf.id)
    }

    return (
        <Smurf>
            <h2>{props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
            <CardActions>
                <Tooltip title="delete">
                    <IconButton><DeleteIcon onClick={handleDelete} /></IconButton>
                </Tooltip>
            </CardActions>
        </Smurf>
    )
};

export default connect(
    null,
    { deleteSmurf }
)(SmurfsCard)
