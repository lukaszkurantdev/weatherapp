import React from 'react';
//styles
import './Modal.css';

interface IProps {
  text?: string;
  header: string;
  onPressLeft: () => void;
  onPressRight?: () => void;
  leftButtonLabel: string;
  rightButtonLabel?: string;
  children?: any
}

const Modal = (props: IProps) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-content-header">
          <h2>{props.header}</h2>
        </div>
        <div className="modal-content-inside">
          {props.children ? props.children : <p>{props.text}</p>}
          
          <div className="modal-button-container">
            <div className="button modal-button" onClick={props.onPressLeft}>
              {props.leftButtonLabel}
            </div>
            {props.rightButtonLabel && (
              <div className="button modal-button" onClick={props.onPressRight}>
                {props.rightButtonLabel}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
