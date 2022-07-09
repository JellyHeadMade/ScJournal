import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NavBar from './navBar';
import TimeLine from '../timeLine';
import CreatePost from '../createPost';

const DEFAULT_HOME_PAGE = <TimeLine/>;
const DEFAULT_CONTACT_PAGE = <CreatePost/>; // obviously this needs to be swapped out for a contact page but for now it's just a placeholder    
const DEFAULT_CREATE_PAGE = <CreatePost/>;

class PageDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: DEFAULT_HOME_PAGE,
            pageName: 'home'
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
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
                {console.log(this.state.currentPage)}
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