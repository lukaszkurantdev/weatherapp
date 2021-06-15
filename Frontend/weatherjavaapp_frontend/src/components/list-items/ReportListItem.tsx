import React from 'react';
import './ListItems.css';
import { IoIosTrash, IoMdCheckmarkCircle } from 'react-icons/io';
import { PinDetails } from "../../types/Pin.model";
interface IProps {
    onReject: () => void;
    onAccept: () => void;
    pin: PinDetails;
    reason: string;
}

const ReportListItem = ({onReject, onAccept, pin, reason}: IProps) => {
    return(
        <div className='list-item-container'>
            <div className='content-container-list'>
                <div className='description-section'>
                {pin.image && <img className="popup-image" src={'data:image/png;name=15_2.png;base64,'+pin.image} alt=""/>}
                    <h4 className="popup-title">{pin.title}</h4>
                    <p className="popup-description" >{pin.description}</p>
                </div>
                <div className="report-reason">
                    <h4>Report reason</h4>
                    <p className='popup-description reason-text'>{reason}</p>
                </div>
                
            </div>
            <div className='right-container'>
                <IoIosTrash onClick={onReject} style={{height: 20, width: 20}} />
                <IoMdCheckmarkCircle onClick={onAccept} style={{height: 20, width: 20}} />
            </div>
        </div>
    )
}

export default ReportListItem;
