import React from "react";
import SevenNumber from '../../assets/numbers/asl-real-number-7.jpg'
import { Link } from "react-router-dom";

const Seven = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={SevenNumber} alt="Number 7" />
            </div>
        </div>
    )
}

export default Seven;