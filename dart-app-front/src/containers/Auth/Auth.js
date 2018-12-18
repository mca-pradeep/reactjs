import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
//import classes from './Auth.css';
import * as actions from "../../store/actions/index";
import Spinner from "../../components/Spinner/Spinner";
import { updateObject, checkValidity } from "../../shared/utility";

class Auth extends Component {
  state = {
    controls: {
      email: {
        type: "email",
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        type: "password",
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    }
  };
  constructor(props) {
    super(props);
    console.log("AUTH", props);
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push(this.props.authRedirectPath);
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      })
    });

    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
    if (this.props.isAuthenticated) {
      this.props.history.push("/admin/dashboard");
    }
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let errorBox = null;
    if (this.props.error) {
      errorBox = <p className="p-error">{this.props.error.message}</p>;
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }
    let form = (
      <form className="p-grid" onSubmit={this.submitHandler}>
        <div className="p-col-12 p-md-12">
          {authRedirect}
          {errorBox}
        </div>
        {formElementsArray.map(formElement => {
          if (formElement.config.type === "email") {
            return (
              <div className="p-col-12" key={formElement.id}>
                <label htmlFor="acUsername">Username</label>
                <InputText
                  value={formElement.value}
                  type={formElement.config.type}
                  onChange={event => this.inputChangedHandler(event, "email")}
                  keyfilter="email"
                />
              </div>
            );
          } else {
            return (
              <div className="p-col-12" key={formElement.id}>
                <label htmlFor="acPassword">Password</label>
                <Password
                  value={formElement.value}
                  onChange={event =>
                    this.inputChangedHandler(event, "password")
                  }
                />
              </div>
            );
          }
        })}
        <div className="p-col-12">
          <Button label="Login" />
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-lg-12 p-md-12">
          <div className="card card-w-title">
            <h1>Login</h1>
            {form}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    isAuthenticated: state.loginReducer.token,
    authRedirectPath: state.loginReducer.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),
    onSetAuthRedirectPath: () =>
      dispatch(actions.setAuthRedirectPath("/admin/dashboard"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
