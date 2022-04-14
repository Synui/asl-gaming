import React from "react";
import ELetter from '../../assets/letters/asl-real-letter-e.jpg'
import { Link } from "react-router-dom";

const E = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={ELetter} alt="Letter E" />
            </div>
        </div>
    )
}

export default E;