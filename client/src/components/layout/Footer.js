import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <section id="footer" className="footer-area ">
        <div className="container">
          <div className="footer-widget pt-75 pb-120">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-7">
                <div className="footer-logo mt-40">
                  <Link to="/">
                    <img
                      src="/dist/images/logo/logo_transparent.png"
                      alt="Logo"
                    />
                  </Link>
                  <p className="mt-10">© 2019 FreshBox Technologies Inc.</p>
                  <ul className="footer-social mt-25">
                    <li>
                      <a href="https://www.facebook.com/tryfreshbox">
                        <i className="lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/tryfreshbox">
                        <i className="lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/tryfreshbox">
                        <i className="lni-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-7">
                <div className="footer-link mt-50">
                  <h5 className="f-title">About us</h5>
                  <ul>
                    <li>
                      <Link to="/choose-a-box-type">Products</Link>
                    </li>

                    <li>
                      <Link to="/freshbox-business">For businesses</Link>
                    </li>
                    <li>
                      <Link to="/ourstory">Our story</Link>
                    </li>
                    <li>
                      <Link to="/privacy">Privacy & Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-7">
                <div className="footer-link mt-50">
                  <h5 className="f-title">Help</h5>
                  <ul>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <a href="https://www.medium.com/@tryfreshbox">Blog</a>
                    </li>
                    <li>
                      <Link to="/partnerships">Partnerships</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
