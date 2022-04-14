import React from "react";
// import { Link } from "react-router-dom";

const Homepage = () => {
    return(
        
        <div className="homepage">
            {/* <Link to="/"> */}
            <h1>ASL Gaming</h1>
            {/* </Link> */}
            <button className="start-button">Start</button>
            <button className="practice-button">Practice</button>
        </div>
    );
}

export default Homepage;