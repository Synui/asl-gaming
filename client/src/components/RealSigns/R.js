import React from "react";
import RLetter from '../../assets/letters/asl-real-letter-r.jpg'
import { Link } from "react-router-dom";

const R = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={RLetter} alt="Letter R" />
            </div>
        </div>
    )
}

export default R;