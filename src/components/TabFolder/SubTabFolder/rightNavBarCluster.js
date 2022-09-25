import React, { useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function RightNavBarCluster(props){

    const [hiddenState, setHiddenState] = useState('Hidden');
    const [loggedIn, setLoggedIn] = useState(false);

    console.log(props.page);

    const userPageClick = (event) => {
        props.setPage('User');
        axios.get('https://scjournalapiv2.herokuapp.com/getallpost')
        .then((response) => {
            const data = response.data;
            console.log(data);
            console.log(data[0].id);
            console.log(data[1].id);
            console.log(data[0]);
            console.log(data[2].story);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='right-nav-cluster-container'>
            <div className='login-tab' onClick={userPageClick}>{loggedIn ? <FontAwesomeIcon icon={faCircleUser} /> : 'Login/Sign Up'}</div>
            <div className='filter-tab'>Filters</div>
            <div className='arrow-tab'>Arrow</div>
        </div>
    )
}

function mapStateToProps(state) {
    const { page } = state.navigationReducer;
    return {
        page
    }
}

RightNavBarCluster = connect(mapStateToProps, actions)(RightNavBarCluster);

export default RightNavBarCluster;