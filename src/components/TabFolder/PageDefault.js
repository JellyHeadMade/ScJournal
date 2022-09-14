import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NavBar from './navBar';
import CreatePost from '../createPost';
import TimeDot from '../TimeDot';
import AboutContact from './aboutContact';

const DEFAULT_HOME_PAGE = <TimeDot/>;
const DEFAULT_CONTACT_PAGE = <AboutContact/> // obviously this needs to be swapped out for a contact page but for now it's just a placeholder    
const DEFAULT_CREATE_PAGE = <CreatePost/>;
const DEFAULT_USER_PAGE = <AboutContact/>;

class PageDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: DEFAULT_HOME_PAGE,
            pageName: 'Home'
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        console.log(this.props.page);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.page !== this.props.page) {
            this.handlePageChange(this.props.page);
        }
    }

    handlePageChange(page) {
        switch(page) {
            case 'Home':
                this.setState({
                    currentPage: DEFAULT_HOME_PAGE
                });
                break;
            case 'Contact':
                this.setState({
                    currentPage: DEFAULT_CONTACT_PAGE
                });
                break;
            case 'Create':
                this.setState({
                    currentPage: DEFAULT_CREATE_PAGE
                });
                break;
            case 'User':
                this.setState({
                    currentPage: DEFAULT_USER_PAGE
                });
                break;
            default:
                this.setState({
                    currentPage: DEFAULT_HOME_PAGE
                });
                break;
        }
    }

    render() {
        return (
            <div className='PageDefault'>
                <NavBar/>
                {this.state.currentPage}
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

PageDefault = connect(mapStateToProps, actions)(PageDefault);

export default PageDefault;