import React from "react";
import FourNumber from '../../assets/numbers/asl-real-number-4.jpg'
import { Link } from "react-router-dom";

const Four = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={FourNumber} alt="Number 4" />
            </div>
        </div>
    )
}

export default Four;