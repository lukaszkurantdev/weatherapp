import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
//styles
import './Checkbox.css';
//utils
import { classNames } from '../../utils/ClassNames';

interface IProps {
  placeholder?: string;
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

interface IState {
  disabled: boolean;
  value: boolean;
}

class Checkbox extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      disabled: false,
      value: props.initialValue || false,
    };
  }

  getValue = () => {
    return this.state.value;
  };

  setValue = (value: boolean) => {
    this.setState({ value });
  };

  onChange = () => {
    this.props.onChange && this.props.onChange(!this.state.value);

    this.setState({
      value: !this.state.value,
    });
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    const classes = classNames({
      checkbox: true,
    });

    return (
      <div className="checkbox-container">
        <div className={classes} onClick={() => this.onChange()}>
          {this.state.value && <IoIosCheckmark />}
        </div>
        <label className="checkbox-label">{this.props.placeholder}</label>
      </div>
    );
  }
}

export default Checkbox;
