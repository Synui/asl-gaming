import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        
        <div className="homepage">
            <h1>ASL Gaming</h1>
            <Link to="/memory-game">
            <button className="start-button">Start</button>
            </Link>
            <Link to="/practice">
            <button className="practice-button">Practice</button>
            </Link>
        </div>
    );
}

export default Homepage;