import React, { useEffect } from 'react';
import SmurfsCard from "./SmurfsCard";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/actions";

const SmurfsList = (props) => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])
    
    return (
        <div>
            {props.smurfs.map(smurf => (<SmurfsCard smurf={smurf} key={smurf.id} />))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        isPosting: state.isPosting,
        isDeleting: state.isDeleting,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfsList);
