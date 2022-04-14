import React from "react";
import NineNumber from '../../assets/numbers/asl-real-number-9.jpg'
import { Link } from "react-router-dom";

const Nine = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={NineNumber} alt="Number 9" />
            </div>
        </div>
    )
}

export default Nine;