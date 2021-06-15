import React, { ChangeEvent } from 'react';
//utils
import { classNames } from '../utils/ClassNames';

interface IProps {
  white?: boolean;
  initialValue?: string;
  style?: Object
}

interface IState {
  value: string;
  errorText: string;
  error: boolean;
}

export default class Input extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: props.initialValue || '',
      errorText: '',
      error: false,
    };
  }

  validate = () => {    
    if (this.state.value.length === 0) {
      this.setState({ errorText: "This field can't be empty.", error: true });
      return false;
    } else {
      this.setState({ errorText: '', error: false });
      return true;
    }
  };

  setValidity = (error: boolean, message: string = '') => {
    this.setState({ error, errorText: message });
  };

  getValue = () => {
    return this.state.value;
  };

  setValue = (value: string) => {
    this.setState({ value });
  };

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: event.target.value, errorText: '', error: false });
  };

  render() {
    const classes = classNames({
      input: true,
      'input-danger': this.state.error,
      'input-reversed': this.props.white,
    });

    return (
      <>
        <textarea
          className={classes}
          onChange={this.handleChange}
          style={this.props.style}
          value={this.state.value}
        />
        {!!this.state.errorText && (
          <p className="label-danger">{this.state.errorText}</p>
        )}
      </>
    );
  }
}
