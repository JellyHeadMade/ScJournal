import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const HOME_TAB_STATE = [
    {name: 'Home', active: true, clickable: false}, 
    {name: 'Contact', active: false, clickable: true}, 
    {name: 'Create', active: false, clickable: true}
];
const CONTACT_TAB_STATE = [
    {name: 'Home', active: false, clickable: true}, 
    {name: 'Contact', active: true, clickable: false}, 
    {name: 'Create', active: false, clickable: true}
];
const CREATE_TAB_STATE = [
    {name: 'Home', active: false, clickable: true}, 
    {name: 'Contact', active: false, clickable: true}, 
    {name: 'Create', active: true, clickable: false}
];

class LeftNavBarCluster extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            HiddenState: 'Hidden',
            activeStates: HOME_TAB_STATE
        }
        this.onClickArrow = this.onClickArrow.bind(this);
        this.handleActiveClick = this.handleActiveClick.bind(this);
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

    handleActiveClick(e, name) {
        switch(name) {
            case 'Home':
                this.setState({activeStates: HOME_TAB_STATE});
                this.props.setPage('Home');
                this.onClickArrow();
                break;
            case 'Contact':
                this.setState({activeStates: CONTACT_TAB_STATE});
                this.props.setPage('Contact');
                this.onClickArrow();
                break;
            case 'Create':
                this.setState({activeStates: CREATE_TAB_STATE});
                this.props.setPage('Create');
                this.onClickArrow();
                break;
            default:
                this.setState({activeStates: HOME_TAB_STATE});
                this.props.setPage('Home');
        }
    }

    render() {
        return (
            <div className='left-nav-cluster-container'>
                <div className='logo-tab'>
                    <img src='https://via.placeholder.com/40/ffffff.png'/>
                </div>
                {this.state.activeStates[0].clickable ? 
                    <div className={`home-tab__${this.state.HiddenState}__active${this.state.activeStates[0].active}`} onClick={(e) => this.handleActiveClick(e, 'Home')}>Home</div> :
                    <div className={`home-tab__${this.state.HiddenState}__active${this.state.activeStates[0].active}`} >Home</div>}
                {this.state.activeStates[1].clickable ? 
                    <div className={`contact-tab__${this.state.HiddenState}__active${this.state.activeStates[1].active}`}  onClick={(e) => this.handleActiveClick(e, 'Contact')} >About/Contact</div> : 
                    <div className={`contact-tab__${this.state.HiddenState}__active${this.state.activeStates[1].active}`}>About/Contact</div>}
                {this.state.activeStates[2].clickable ? 
                    <div className={`create-post-tab__${this.state.HiddenState}__active${this.state.activeStates[2].active}`}  onClick={(e) => this.handleActiveClick(e, 'Create')} >Create Post</div> : 
                    <div className={`create-post-tab__${this.state.HiddenState}__active${this.state.activeStates[2].active}`}>Create Post</div>}
                <div className='arrow-tab' onClick={this.onClickArrow}>Arrow</div>
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

LeftNavBarCluster = connect(mapStateToProps, actions)(LeftNavBarCluster);

export default LeftNavBarCluster;