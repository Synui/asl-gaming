import React from "react";
import TLetter from '../../assets/letters/asl-real-letter-t.jpg'
import { Link } from "react-router-dom";

const T = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={TLetter} alt="Letter T" />
            </div>
        </div>
    )
}

export default T;