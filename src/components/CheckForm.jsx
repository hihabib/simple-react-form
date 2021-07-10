import React, { Component } from "react";
import PropTypes from "prop-types";
class CheckForm extends Component {
  render() {
    return (
      <div className={this.props.inline ? "form-check-inline" : "form-check"}>
        <input
          checked={this.props.checked}
          onChange={this.props.handleChange}
          value={this.props.value}
          className={"form-check-input " + this.props.className}
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
        />
        <label
          style={this.props.inline ? { marginLeft: 5 } : { marginLeft: 0 }}
          className="form-check-label"
          htmlFor={this.props.id}
        >
          {this.props.value}
          {this.props.children}
        </label>
        <div className="invalid-feedback">{this.props.dangerFeedback}</div>
      </div>
    );
  }
}
CheckForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string,
  inline: PropTypes.bool.isRequired,
  checked: PropTypes.bool,
  className: PropTypes.any,
  dangerFeedback: PropTypes.string
};
CheckForm.defaultProps = {
  type: "radio",
  inline: false,
};
export default CheckForm;
