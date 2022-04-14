import React from "react";
import KLetter from '../../assets/letters/asl-real-letter-k.jpg'
import { Link } from "react-router-dom";

const K = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={KLetter} alt="Letter K" />
            </div>
        </div>
    )
}

export default K;