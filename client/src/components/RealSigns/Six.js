import React from "react";
import SixNumber from '../../assets/numbers/asl-real-number-6.jpg'
import { Link } from "react-router-dom";

const Six = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={SixNumber} alt="Number 6" />
            </div>
        </div>
    )
}

export default Six;