import React from "react";
import YLetter from '../../assets/letters/asl-real-letter-y.jpg'
import { Link } from "react-router-dom";

const Y = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={YLetter} alt="Letter Y" />
            </div>
        </div>
    )
}

export default Y;