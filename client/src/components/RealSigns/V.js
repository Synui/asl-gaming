import React from "react";
import VLetter from '../../assets/letters/asl-real-letter-v.jpg'
import { Link } from "react-router-dom";

const V = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={VLetter} alt="Letter V" />
            </div>
        </div>
    )
}

export default V;