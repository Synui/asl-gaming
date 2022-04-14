import React from "react";
import WLetter from '../../assets/letters/asl-real-letter-w.jpg'
import { Link } from "react-router-dom";

const W = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={WLetter} alt="Letter W" />
            </div>
        </div>
    )
}

export default W;