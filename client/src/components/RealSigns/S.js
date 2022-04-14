import React from "react";
import SLetter from '../../assets/letters/asl-real-letter-s.jpg'
import { Link } from "react-router-dom";

const S = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={SLetter} alt="Letter S" />
            </div>
        </div>
    )
}

export default S;