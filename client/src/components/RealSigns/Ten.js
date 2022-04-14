import React from "react";
import TenNumber from '../../assets/numbers/asl-real-number-10.gif'
import { Link } from "react-router-dom";

const Ten = () => {
    return (
        <div>
            <div>
            <Link to="/practice" className='back-to-menu'>← Back to Practice</Link>
            </div>
            <div>
                <img className="real-sign-images" src={TenNumber} alt="Number 10" />
            </div>
        </div>
    )
}

export default Ten;