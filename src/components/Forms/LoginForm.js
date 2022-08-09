import React, { useState } from 'react';

function LoginForm() {
    const [details, setDetials] = useState({name: '', email: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();

        console.log(details);

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name' onChange={e => setDetials({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' id='email' onChange={e => setDetials({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' name='password' id='password' onChange={e => setDetials({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type='submit' value='Submit'/>
            </div>
        </form>
    )
}

export default LoginForm;