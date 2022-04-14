import React from "react";
import LLetter from '../../assets/letters/asl-real-letter-l.jpg'
import { Link } from "react-router-dom";

const L = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={LLetter} alt="Letter L" />
            </div>
        </div>
    )
}

export default L;