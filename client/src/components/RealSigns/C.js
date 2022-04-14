import React from "react";
import CLetter from '../../assets/letters/asl-real-letter-c.jpg'
import { Link } from "react-router-dom";

const C = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={CLetter} alt="Letter C" />
            </div>
        </div>
    )
}

export default C;