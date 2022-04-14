import React from "react";
import OneNumber from '../../assets/numbers/asl-real-number-1.jpg'
import { Link } from "react-router-dom";

const One = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={OneNumber} alt="Number 1" />
            </div>
        </div>
    )
}

export default One;