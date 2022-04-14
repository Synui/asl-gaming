import React from "react";
import TwoNumber from '../../assets/numbers/asl-real-number-2.jpg'
import { Link } from "react-router-dom";

const Two = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={TwoNumber} alt="Number 2" />
            </div>
        </div>
    )
}

export default Two;