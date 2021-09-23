import { Link } from "react-router-dom";
import React from 'react'

function NotFound() {
    return (
        <div>
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    )
}

export default NotFound
