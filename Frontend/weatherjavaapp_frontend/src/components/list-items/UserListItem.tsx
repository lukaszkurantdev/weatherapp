import React from 'react';
import './ListItems.css';
import { IoIosPerson, IoIosRemoveCircleOutline } from 'react-icons/io';

interface IProps {
    onRemove: () => void;
    name: string;
}

const UserListItem = ({onRemove, name}: IProps) => {
    return(
        <div className='list-item-container'>
            <div className='left-container'>
                <div className="drop-button">
                    <IoIosPerson />
                </div>
                <h6 className='text'>{name}</h6>
            </div>
            <div className='right-container'>
                <IoIosRemoveCircleOutline onClick={onRemove} style={{height: 20, width: 20}} />
            </div>
        </div>
    )
}

export default UserListItem
