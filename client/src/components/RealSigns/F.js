import React from "react";
import FLetter from '../../assets/letters/asl-real-letter-f.jpg'
import { Link } from "react-router-dom";

const F = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={FLetter} alt="Letter F" />
            </div>
        </div>
    )
}

export default F;