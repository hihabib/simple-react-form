import React, { Component } from "react";
import PropTypes from "prop-types";
class TextForm extends Component {
  render() {
    return (
      <div className="form-group mt-3">
        <label className="form-label" htmlFor={this.props.id}>
          {this.props.children}
        </label>
        <input
          onChange={this.props.handleChange}
          value={this.props.value}
          className={"form-control " + this.props.className}
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
        />
        <div className="invalid-feedback">{this.props.dangerFeedback}</div>
      </div>
    );
  }
}
TextForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.any,
  dangerFeedback: PropTypes.string
};
TextForm.defaultProps = {
  type: "text",
  children: "Fill the input box",
};
export default TextForm;
