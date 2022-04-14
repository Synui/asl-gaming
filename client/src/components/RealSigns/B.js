import React from "react";
import BLetter from '../../assets/letters/asl-real-letter-b.jpg'
import { Link } from "react-router-dom";

const B = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={BLetter} alt="Letter B" />
            </div>
        </div>
    )
} 

export default B;