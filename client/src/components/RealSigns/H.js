import React from "react";
import HLetter from '../../assets/letters/asl-real-letter-h.jpg'
import { Link } from "react-router-dom";

const H = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={HLetter} alt="Letter H" />
            </div>
        </div>
    )
}

export default H;