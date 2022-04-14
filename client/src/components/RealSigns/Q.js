import React from "react";
import QLetter from '../../assets/letters/asl-real-letter-q.jpg'
import { Link } from "react-router-dom";

const Q = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={QLetter} alt="Letter Q" />
            </div>
        </div>
    )
}

export default Q;