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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildForm.bind(this);
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

    buildForm() {
        // console.log('im i alive?');
        let formData = new FormData();

        formData.append('test_userImage[userImage]', this.state.userImage);
        formData.append('PostTltle', this.state.postTitle);
        // console.log(formData)

        return formData;
    }

    handleSubmit(event) {
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[0].name);
        console.log(event.target[1].name);
        this.setState({
            [event.target[0].name] : event.target[0].value,
            [event.target[1].name] : event.target[1].value
        })
        console.log(this.state.postTitle);
        console.log(this.state.story);
        this.buildForm();
        event.preventDefault();
        // console.log('hey');
        console.log(event.target);

    }


    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.userName)
        return (
            <form onSubmit={this.handleSubmit} className='create-story-form'>
                <div className='form1' >
                    <input
                        type='text' name='postTitle'
                        placeholder='Enter Name Here'
                        value={this.state.PostTitle}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text' name='story'
                        placeholder='Tell your story'
                        value={this.state.story}
                        onChange={this.handleChange}
                    />
                </div>
                <button className='btn' type='submit'>Enter</button>
            </form>
        )
    }
}

export default CreateStory;