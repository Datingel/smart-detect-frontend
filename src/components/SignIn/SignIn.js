import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      singInPassword: '',
    };
  }

  onEmailChange = e => {
    this.setState({signInEmail: e.target.value});
  };

  onPasswordChange = e => {
    this.setState({singInPassword: e.target.value});
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    const {onRouteChange} = this.props;
    return (
      <article className='br3 ba o-90 dark-gray b--black-10 mv4 w-100 w-80-s w-50-m w-25-l mw6 shadow-5 center'>
        <main className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up ' className='ba b--transparent ph0 mh0 center'>
              <legend className='f1 fw6 ph0 mh0 center '>Sign In</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6 center' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  onChange={this.onEmailChange}
                  type='email'
                  name='email-address'
                  id='email-address'
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6 center' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  onChange={this.onPasswordChange}
                  type='password'
                  name='password'
                  id='password'
                />
              </div>
            </fieldset>
            <div className='center'>
              <input
                onClick={this.onSubmitSignIn}
                className='b ph3 br2 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Sign in'
              />
            </div>
            <div className='lh-copy mt3 center'>
              <p onClick={() => onRouteChange('register')} className='f6 link dim black db pointer'>
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
