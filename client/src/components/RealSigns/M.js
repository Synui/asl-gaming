import React from "react";
import MLetter from '../../assets/letters/asl-real-letter-m.jpg'
import { Link } from "react-router-dom";

const M = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={MLetter} alt="Letter M" />
            </div>
        </div>
    )
}

export default M;