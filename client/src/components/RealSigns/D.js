import React from "react";
import DLetter from '../../assets/letters/asl-real-letter-d.jpg'
import { Link } from "react-router-dom";

const D = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={DLetter} alt="Letter D" />
            </div>
        </div>
    )
}

export default D;