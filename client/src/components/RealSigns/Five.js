import React from "react";
import FiveNumber from '../../assets/numbers/asl-real-number-5.jpg'
import { Link } from "react-router-dom";

const Five = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={FiveNumber} alt="Number 5" />
            </div>
        </div>
    )
}

export default Five;