import React from "react";
import ILetter from '../../assets/letters/asl-real-letter-i.jpg'
import { Link } from "react-router-dom";

const I = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={ILetter} alt="Letter I" />
            </div>
        </div>
    )
}

export default I;