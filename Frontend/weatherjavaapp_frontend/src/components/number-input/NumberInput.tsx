import React from 'react';
//@ts-ignore
import InputNumber from 'rc-input-number';
//styles
import './NumberInput.css';

interface IProps {
  initialValue?: number;
}

interface IState {
  disabled: boolean;
  value: number;
}
class NumberInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      disabled: false,
      value: props.initialValue || 1,
    };
  }

  getValue = () => {
    return this.state.value;
  };

  setValue = (value: number) => {
    this.setState({ value });
  };

  onChange = (v: any) => {
    this.setState({
      value: v,
    });
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <InputNumber
        step={0.1}
        value={this.state.value}
        onChange={this.onChange}
        disabled={this.state.disabled}
      />
    );
  }
}

export default NumberInput;
