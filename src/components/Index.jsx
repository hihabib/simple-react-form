import React, { Component } from "react";
import PropTypes from 'prop-types';
import InputForm from "./InputForm";
import Alert from "./Alert";
class Index extends Component {
  state = {
    value: {
      Name: "",
      Password: "",
      Email: "",
      Gander: "",
      agreement: false,
      updated: false,
    },
  };
  warning = {};
  submitSuccessful = null;
  handleSubmit = (event) => {
    //handleSubmit
    event.preventDefault();
    let result = {};
    const error = this.handleValidation();
    if (Object.keys(error).length === 0) {
      this.submitSuccessful = 'successful';
      this.warning = "Submit Successful";
      result.Name = this.state.value.Name;
      result.Password = this.state.value.Password;
      result.Email = this.state.value.Email;
      result.Gander = this.state.value.Gander;

      this.props.createUsers(result);
    }

    this.setState({
      value: {
        Name: "",
        Password: "",
        Email: "",
        Gander: "",
        agreement: false,
        updated: false,
        warning: "",
      },
    });
    if (Object.keys(result).length === 0) {
      this.submitSuccessful = 'unsuccessful';
      result.Warning =
        "Please don't submit form before filling the form compeletly";
      this.warning = result;
      this.setState({ value: { ...this.state.value, updated: true } });
    }

    event.target.reset();
  };

  handleValidation = () => {
    let errors = {};
    if (this.state.value.Name.length === 0) {
      errors.Name = "Please add your name";
    }
    if (this.state.value.Password.length === 0) {
      errors.Password = "Please add a strong password";
    }
    if (this.state.value.Email.length === 0) {
      errors.Email = "Please add your email address";
    }
    if (this.state.value.Gander.length === 0) {
      errors.Gander = "Please select your gander";
    }
    if (!this.state.value.agreement) {
      errors.agreement = "Please agree with our terms and policy";
    }

    return errors;
  };
  handleAgreement = (event) => {
    if (event.target.checked) {
      this.setState({
        value: { ...this.state.value, agreement: true, updated: true },
      });
    } else {
      this.setState({ value: { ...this.state.value, agreement: false } });
    }
  };
  handleInput = (event) => {
    this.setState(() => {
      return {
        value: {
          ...this.state.value,
          [event.target.name]: event.target.value,
          updated: true,
        },
      };
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            handleAgreement={this.handleAgreement}
            handleInput={this.handleInput}
            state={this.state}
            handleValidation={this.handleValidation}
          />
        </form>
        <Alert warning={this.warning} submitSuccessful={this.submitSuccessful} />
      </>
    );
  }
}
Index.propTypes = {
  createUsers: PropTypes.func.isRequired
}
export default Index;
