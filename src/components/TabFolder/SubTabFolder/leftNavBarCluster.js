import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const HOME_TAB_STATE = [
    {name: 'Home', active: true, clickable: false, bgColor: '#4FACEE'}, 
    {name: 'Contact', active: false, clickable: true, bgColor: '#164664'}, 
    {name: 'Create', active: false, clickable: true, bgColor: '#164664'}
];
const CONTACT_TAB_STATE = [
    {name: 'Home', active: false, clickable: true, bgColor: '#164664'}, 
    {name: 'Contact', active: true, clickable: false, bgColor: '#4FACEE'}, 
    {name: 'Create', active: false, clickable: true, bgColor: '#164664'}
];
const CREATE_TAB_STATE = [
    {name: 'Home', active: false, clickable: true, bgColor: '#164664'}, 
    {name: 'Contact', active: false, clickable: true, bgColor: '#164664'}, 
    {name: 'Create', active: true, clickable: false, bgColor: '#4FACEE'}
];
const USER_TAB_STATE = [
    {name: 'Home', active: false, clickable: true, bgColor: '#164664'},
    {name: 'Contact', active: false, clickable: true, bgColor: '#164664'},
    {name: 'Create', active: false, clickable: true, bgColor: '#164664'}
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

    componentDidUpdate = (prevProps) => {
        if (prevProps.page !== this.props.page) {
            if (this.props.page === 'User') {
                this.setState({activeStates: USER_TAB_STATE});
            }
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
            case 'User':
                this.setState({activeStates: USER_TAB_STATE});
                this.props.setPage('User');
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
                <div className={`nav-bar-spacer1__${this.state.HiddenState}__active${this.state.activeStates[0].active}`} style={{backgroundColor: this.state.activeStates[0].bgColor}}></div>
                {this.state.activeStates[0].clickable ? 
                    <div className={`home-tab__${this.state.HiddenState}__active${this.state.activeStates[0].active}`} onClick={(e) => this.handleActiveClick(e, 'Home')}>Home</div> :
                    <div className={`home-tab__${this.state.HiddenState}__active${this.state.activeStates[0].active}`} >Home</div>}
                    <div className={`nav-bar-spacer2__${this.state.HiddenState}__active${this.state.activeStates[1].active}`} style={{backgroundColor: this.state.activeStates[1].bgColor}}></div>
                {this.state.activeStates[1].clickable ? 
                    <div className={`contact-tab__${this.state.HiddenState}__active${this.state.activeStates[1].active}`}  onClick={(e) => this.handleActiveClick(e, 'Contact')} >About/Contact</div> : 
                    <div className={`contact-tab__${this.state.HiddenState}__active${this.state.activeStates[1].active}`}>About/Contact</div>}
                    <div className={`nav-bar-spacer3__${this.state.HiddenState}__active${this.state.activeStates[2].active}`} style={{backgroundColor: this.state.activeStates[2].bgColor}}></div>
                {this.state.activeStates[2].clickable ? 
                    <div className={`create-post-tab__${this.state.HiddenState}__active${this.state.activeStates[2].active}`}  onClick={(e) => this.handleActiveClick(e, 'Create')} >Create Post</div> : 
                    <div className={`create-post-tab__${this.state.HiddenState}__active${this.state.activeStates[2].active}`}>Create Post</div>}
                    <div className='nav-bar-spacer4' style={{backgroundColor: '#164664'}}></div>
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