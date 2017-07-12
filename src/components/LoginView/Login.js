import './Login.css'

class Login extends React.Component {
  constructor() {
    super()
    this.doLogin = this.doLogin.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // FIXME is it really necessary with the submit typed button ?
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.doLogin()
    }
  }

  doLogin() {
    const nextUrl = this.props.nextUrl || '/'
    this.props.executeLogin(this.loginInput.value, btoa(this.passwordInput.value), nextUrl)
  }

  render() {
    const { error } = this.props
    let groupClasses = 'form-group'
    if (error !== null) {
      groupClasses += ' has-error'
    }

    return (
      <div className="login">
        <div className="login-form secondary-border-color">
          <h1>Authentification</h1>
          <div className={groupClasses}>
            <label className="control-label" htmlFor="login">
              Login
            </label>
            <input
              type="text"
              ref={c => (this.loginInput = c)}
              id="login"
              className="form-control"
              placeholder="Saisir votre identifiant"
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className={groupClasses}>
            <label className="control-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              type="password"
              ref={c => (this.passwordInput = c)}
              id="password"
              className="form-control"
              placeholder="Saisir votre mot de passe"
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="login-footer">
            <span className="text-danger">
              {this.props.error}
            </span>
            <button id="submit" className="btn btn-primary pull-right" onClick={this.doLogin}>
              Connexion
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  error: React.PropTypes.string,
  nextUrl: React.PropTypes.string,
  executeLogin: React.PropTypes.func,
}

Login.defaultProps = {
  error: null,
  nextUrl: '/',
  executeLogin: () => {},
}

export default Login
