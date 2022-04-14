import React from "react";
import EightNumber from '../../assets/numbers/asl-real-number-8.jpg'
import { Link } from "react-router-dom";

const Eight = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={EightNumber} alt="Number 8" />
            </div>
        </div>
    )
}

export default Eight;