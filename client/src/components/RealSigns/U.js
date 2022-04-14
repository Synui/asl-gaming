import React from "react";
import ULetter from '../../assets/letters/asl-real-letter-u.jpg'
import { Link } from "react-router-dom";

const U = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={ULetter} alt="Letter U" />
            </div>
        </div>
    )
}

export default U;