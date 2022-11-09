import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class RightNavBarCluster extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        }
        this.userPageClick = this.userPageClick.bind(this);
    }

    userPageClick = (event) => {
        this.props.setPage('User');
    }

    render() {
        return (
            <div className='right-nav-cluster-container'>
                <div className='login-tab' onClick={this.userPageClick}>{this.state.loggedIn ? <FontAwesomeIcon icon={faCircleUser} /> : 'Login/Sign Up'}</div>
                <div className='filter-tab'>Filters</div>
                <div className='arrow-tab'>Arrow</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { page } = state.navigationReducer;
    return {
        page
    }
}

RightNavBarCluster = connect(mapStateToProps, actions)(RightNavBarCluster);

export default RightNavBarCluster;