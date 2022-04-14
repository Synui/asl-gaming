import React from "react";
import ZLetter from '../../assets/letters/asl-real-letter-z.gif'
import { Link } from "react-router-dom";

const Z = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={ZLetter} alt="Letter Z" />
            </div>
        </div>
    )
}

export default Z;