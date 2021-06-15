import React, { ChangeEvent } from 'react';
//utils
import { classNames } from '../utils/ClassNames';

interface IProps {
  type?: 'email' | 'password' | 'elementName';
  white?: boolean;
  initialValue?: string;
}

interface IState {
  value: string;
  errorText: string;
  error: boolean;
}

const regexes = {
  email: {
    regex: /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-+]+)*@[a-zA-Z0-9-]{1,60}(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/,
    alert: 'Invalid email address.',
  },
  password: {
    regex: /^.{5,}$/,
    alert: 'Invalid password.',
  },
  elementName: {
    regex: /^[_a-zA-Z0-9]{3,}$/,
    alert: 'Invalid value.',
  },
};

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
    const { type } = this.props;

    if (type !== undefined) {
      if (type === 'password') {
        if (!regexes.password.regex.test(this.state.value)) {
          this.setState({ errorText: regexes.password.alert, error: true });
          return;
        }
      } else if (type === 'email') {
        if (!regexes.email.regex.test(this.state.value)) {
          this.setState({ errorText: regexes.email.alert, error: true });
          return;
        }
      } else if (type === 'elementName') {
        if (!regexes.elementName.regex.test(this.state.value)) {
          this.setState({ errorText: regexes.elementName.alert, error: true });
          return;
        }
      }
    }

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

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        <input
          className={classes}
          onChange={this.handleChange}
          value={this.state.value}
          type={this.props.type === 'password' ? 'password' : ''}
        />
        {!!this.state.errorText && (
          <p className="label-danger">{this.state.errorText}</p>
        )}
      </>
    );
  }
}
