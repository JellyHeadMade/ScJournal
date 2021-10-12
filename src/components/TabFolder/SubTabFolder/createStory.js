import React from 'react';

class CreateStory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            __id: null,
            userImage: '',
            userName: '',
            postTitle: '',
            postDate: '',
            shipTag: '',
            locationTag: '',
            activityTag: '',
            story: '',
            images: []
        }

        this.handleChange = this.handleChange.bind(this);
        // this.SettingUserInfo = this.SettingUserInfo.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.buildForm = this.buildForm.bind(this);
        // this.componentCondfig = this.componentCondfig.bind(this);
        // this.djsConfig = this.djsConfig.bind(this);
        // this.handleImage1drop = this.handleImage1drop.bind(this);
        // this.handleImage2drop = this.handleImage2drop.bind(this);
        // this.handleImage3drop = this.handleImage3drop.bind(this);
        // // this.deleteImage = this.deleteImage.bind(this);
        // this.image1 = React.createRef();
        // this.image2 = React.createRef();
        // this.image3 = React.createRef();

    }


    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        console.log(this.props)
        console.log(this.props.userName)
        return (
            <form onSubmit={this.handleSubmit} className='create-story-form'>
                <div className='' >
                    <input
                        type='text' name='Story Title'
                        placeholder='Enter Name Here'
                        value={this.state.PostTitle}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        )
    }
}

export default CreateStory;