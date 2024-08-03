import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
    <div className=" bottom-0 w-full text-white text-center">
      <footer className="footer">
        <div className="footer1 text-center w-full" >
          <div className="footer1-left  w-1/3">
            <h2 className="text-2xl">LOCATION </h2>
            <span>2215 John Daniel Drive</span>
            <span>Clark, MO 65243</span>
          </div>
          <div className="footer1-middle  w-1/3">
            <h2 className="text-2xl">AROUND THE WEB </h2>
            <div className="items">
              <p>
                <i class="fa-brands fa-facebook"></i>
              </p>
              <p>
                <i class="fa-brands fa-instagram"></i>
              </p>
              <p>
                <i class="fa-brands fa-twitter"></i>
              </p>
              <p>
                <i class="fa-brands fa-linkedin"></i>
              </p>
            </div>
          </div>
          <div className="footer1-right  w-1/3">
            <h2 className="text-2xl">ABOUT FREELANCER </h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>

      </footer>

      
      <div className="lastfooter">
          <p className="text-sm">Copyright  &copy; Your Website 2021</p>
        </div>
        </div>
    </>
  );
}
