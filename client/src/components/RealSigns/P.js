import React from "react";
import PLetter from '../../assets/letters/asl-real-letter-p.jpg'
import { Link } from "react-router-dom";

const P = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={PLetter} alt="Letter P" />
            </div>
        </div>
    )
}

export default P;