// Import react library and react router link component.
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    // Return the 404 div component below.
    <div className="vh-100 text-white d-flex justify-content-center align-items-center flex-column fs-1">
      <h1>404</h1>
      <p className="text-center">
        Page Not Found <br />
        Go Back To{" "}
        <Link
          // Link routes to the home page.
          to="/portfolio-website"
          className="link linkhover"
        >
          Home
        </Link>
      </p>
    </div>
  );
}

// Export the default component NotFound.
export default NotFound;
