import React from "react";
import OLetter from '../../assets/letters/asl-real-letter-o.jpg'
import { Link } from "react-router-dom";

const O = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={OLetter} alt="Letter O" />
            </div>
        </div>
    )
}

export default O;