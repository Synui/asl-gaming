import React from "react";
import ThreeNumber from '../../assets/numbers/asl-real-number-3.jpg'
import { Link } from "react-router-dom";

const Three = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={ThreeNumber} alt="Number 3" />
            </div>
        </div>
    )
}

export default Three;