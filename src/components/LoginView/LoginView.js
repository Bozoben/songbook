import {connect} from 'react-redux';
import LoginView from './Login';
import {executeLogin,loginFailure} from '../../actions/auth';
//import applicationConfig from '../../application.json';


const mapStateToProps = (state) => {
  return{
    error: state.auth.authStatus,
    title: "Coucou"
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    executeLogin: (login, password, nextUrl) => {
      if (!login) {
        dispatch(loginFailure('L\'identifiant est obligatoire.'));
      } else if (!password) {
        dispatch(loginFailure('Le mot de passe est obligatoire.'));
      } else {
        dispatch(executeLogin(login, password, nextUrl));
      }
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginView);
