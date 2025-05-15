// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom"; // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types"; // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer"; // Import a custom hook for accessing the global state
import { BlogE1 } from "../components/BlogE1";
import { BlogE2 } from "../components/BlogE2";
import { BlogE3 } from "../components/BlogE3";
// Define and export the Single component which displays individual item details.
export const Blog = () => {
  return (
    <>
      <br />
      <div className="container-fluid blogb">
        <br />
        <div className="bg-light">
          <h1 className="blogT">BLOG</h1>
        </div>
        <div className="topB"></div>
        <BlogE1 />
        <BlogE2 />
        <BlogE3 />
        <div className="bottomB"></div>
      </div>
    </>
  );
};
