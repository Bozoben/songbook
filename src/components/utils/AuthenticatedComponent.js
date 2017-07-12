import {connect} from 'react-redux';
import {push} from 'react-router-redux';

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this._checkAuth();
    }

    componentWillReceiveProps() {
      this._checkAuth();
    }

    _checkAuth() {
      if (!this.props.isAuthenticated) {
        let redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated ? <Component {...this.props}/> : null}
        </div>
      )
    }
  }

  AuthenticatedComponent.propTypes = {
    isAuthenticated: React.PropTypes.bool,
    location: React.PropTypes.object,
    dispatch: React.PropTypes.func
  }

  const mapStateToProps = (state) => ({
    token: state.auth.token,
    userName: state.auth.userName,
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}
