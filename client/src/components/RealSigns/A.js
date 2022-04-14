import React from "react";
import ALetter from '../../assets/letters/asl-real-letter-a.jpg'
import { Link } from "react-router-dom";

const A = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={ALetter} alt="Letter A" />
            </div>
        </div>
    )
}

export default A;
