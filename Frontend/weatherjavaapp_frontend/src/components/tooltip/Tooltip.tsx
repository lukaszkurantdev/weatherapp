import React from 'react';
import { IoIosHelp } from 'react-icons/io';
import Tooltip from 'rc-tooltip';
//styles
import "./Tooltip.css"
import { classNames } from '../../utils/ClassNames';

interface IProps {
  title?: string;
  content?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  type?: 'big' | 'small';
}

const TooltipComponent = (props: IProps) => {
  const classes = classNames({
    'tooltip-hover': true,
    'tooltip-hover-small': props.type === 'small',
  });
  
  return(
    <Tooltip
      placement={props.placement || "top"}
      trigger={['hover']}
      overlay={
        <>
          {!!props.title &&
            <p className="tooltip-hover-title">{props.title}</p>
          }
          <span className="tooltip-hover-description">{props.content}</span>
        </>
      }
      >
      <div className={classes}>
        <IoIosHelp />
      </div>
    </Tooltip>
  );
}

export default TooltipComponent;