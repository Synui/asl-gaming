import React from "react";
import XLetter from '../../assets/letters/asl-real-letter-x.jpg'
import { Link } from "react-router-dom";

const X = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={XLetter} alt="Letter X" />
            </div>
        </div>
    )
}

export default X;