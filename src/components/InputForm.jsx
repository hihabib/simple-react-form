import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckForm from "./CheckForm";
import TextForm from "./TextForm";

class InputForm extends Component {
  render() {
    return (
      <>
        <TextForm
          handleChange={this.props.handleInput}
          value={this.props.state.value.Name}
          id="name"
          name="Name"
          className={
            (!this.props.state.value.updated) ? 'submitted':
            (Object.keys(this.props.handleValidation()).filter((el) => {
              return el === "Name";
            }).length > 0)
              ? "is-invalid"
              : "is-valid"
          }
          dangerFeedback="Please enter your full name"
        >
          Enter your Name
        </TextForm>
        <TextForm
          handleChange={this.props.handleInput}
          value={this.props.state.value.Password}
          id="password"
          type="password"
          name="Password"
          className={
            (!this.props.state.value.updated) ? 'submitted':
            (Object.keys(this.props.handleValidation()).filter((el) => {
              return el === "Password";
            }).length > 0)
              ? "is-invalid"
              : "is-valid"
          }
          dangerFeedback="Please enter a strong password"

        >
          Enter Your Password
        </TextForm>

        <TextForm
          handleChange={this.props.handleInput}
          value={this.props.state.value.Email}
          id="email"
          name="Email"
          className={
            (!this.props.state.value.updated) ? 'submitted':
            (Object.keys(this.props.handleValidation()).filter((el) => {
              return el === "Email";
            }).length > 0)
              ? "is-invalid"
              : "is-valid"
          }
          dangerFeedback="Please enter your Email address"

        >
          Enter your Email
        </TextForm>

        <strong className="mt-3 d-block">Please select your gander</strong>

        <CheckForm
          handleChange={this.props.handleInput}
          value="Male"
          id="male"
          name="Gander"
          inline={true}
          className={
            (!this.props.state.value.updated) ? 'submitted':
            (Object.keys(this.props.handleValidation()).filter((el) => {
              return el === "Gander";
            }).length > 0)
              ? "is-invalid"
              : "is-valid"
          }
        />
        <CheckForm
          handleChange={this.props.handleInput}
          value="Female"
          id="female"
          inline={true}
          name="Gander"
          className={
            (!this.props.state.value.updated) ? 'submitted':
            (Object.keys(this.props.handleValidation()).filter((el) => {
              return el === "Gander";
            }).length > 0)
              ? "is-invalid"
              : "is-valid"
          }

        />

        <CheckForm
          handleChange={this.props.handleAgreement}
          checked={this.props.state.value.agreement}
          id="agree"
          name="agreement"
          inline={false}
          type="checkbox"
          className={
            (!this.props.state.value.updated) ? 'submitted':
            (Object.keys(this.props.handleValidation()).filter((el) => {
              return el === "agreement";
            }).length > 0)
              ? "is-invalid"
              : "is-valid"
          }

        >
          I agree with the privacy policy
        </CheckForm>
        <button
          disabled={!this.props.state.value.agreement}
          className={"btn  " + (this.props.state.value.agreement ? 'btn-success mt-3 d-flex' : 'btn-danger mt-3 d-flex')}
          type="submit"
        >
          Sign Up
        </button>
      </>
    );
  }
}
InputForm.propTypes = {
  handleAgreement: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
export default InputForm;
