import React from "react";
import NLetter from '../../assets/letters/asl-real-letter-n.jpg'
import { Link } from "react-router-dom";

const N = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={NLetter} alt="Letter N" />
            </div>
        </div>
    )
}

export default N;