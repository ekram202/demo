import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="container2 grid grid-cols-1  ">
        <h1>ABOUT COMPONENT </h1>

        <div className="line2">
          <div class="line"></div>
          <i class="fas fa-star star"></i>
          <div class="line"></div>
        </div>

        <div className="text3 text-center py-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          <div className="tex1 ">
            <h5>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </h5>
          </div>
          <div className="tex2 ">
            <h5>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
