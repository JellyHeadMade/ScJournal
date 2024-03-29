import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const FILTER_TAB_STATE = [
    {name: 'expandedRight', active: true, clickable: false, bgColor: '#4FACEE'}
];

class RightNavBarCluster extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            HiddenState: 'Hidden',
        }
        this.userPageClick = this.userPageClick.bind(this);
        this.onClickArrow = this.onClickArrow.bind(this);
    }

    userPageClick = (event) => {
        this.props.setPage('User');
    }

    onClickArrow(e) {
        switch(this.state.HiddenState) {
            case 'Hidden': 
                this.setState({HiddenState: 'notHidden'});
                break;
            case 'notHidden':
                this.setState({HiddenState: 'Hidden'});
                break;
            default:
                this.setState({HiddenState: 'Hidden'});
        }
    }

    render() {
        return (
            <div className='right-nav-cluster-container'>
                <div className='profile-tab' onClick={this.userPageClick}><FontAwesomeIcon icon={faCircleUser} /> {this.state.loggedIn ? null : 'Login/Sign Up'}</div>
                {this.state.loggedIn ? <div className='pocket-user-info'>Put user info here</div> : null}
                <div className='filter-tab'>Filters</div>
                <div className='arrow-tab' onClick={this.onClickArrow}>
                    {this.state.HiddenState === 'Hidden' ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
                </div>
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