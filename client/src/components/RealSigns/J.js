import React from "react";
import JLetter from '../../assets/letters/asl-real-letter-j.gif'
import { Link } from "react-router-dom";

const J = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={JLetter} alt="Letter J" />
            </div>
        </div>
    )
}

export default J;