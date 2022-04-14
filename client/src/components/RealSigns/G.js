import React from "react";
import GLetter from '../../assets/letters/asl-real-letter-g.jpg'
import { Link } from "react-router-dom";

const G = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={GLetter} alt="Letter G" />
            </div>
        </div>
    )
}

export default G;