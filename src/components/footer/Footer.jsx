import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>AI Services</span>
            <span>Consulting</span>
            <span>Data</span>
            <span>Business</span>
            <span>Personal Growth & Hobbies</span>
            <span>Photography</span>
            <span>Finance</span>
            <span>End-to-End Projects</span>
            <span>Service Catalog</span>
          </div>
          <div className="item">
            <h2>For Clients</h2>
            <span>How Fiverr Works</span>
            <span>Customer Success Stories</span>
            <span>Trust & Safety</span>
            <span>Quality Guide</span>
            <span>Fiverr Learn</span>
            <span>Fiverr Guides</span>
            <span>Fiverr Answers</span>
          </div>
          <div className="item">
            <h2>For Freelancers</h2>
            <span>Become a Fiverr Freelancer</span>
            <span>Become an Agency</span>
            <span>Kickstart</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
          </div>
          <div className="item">
            <h2>Business Solutions</h2>
            <span>Fiverr Pro</span>
            <span>Project Management Service</span>
            <span>ClearVoice</span>
            <span>Working not Working</span>
            <span>AutoDS</span>
            <span>SkillBay Logo Maker</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Company</h2>
            <span>About Fiverr</span>
            <span>Help & Support</span>
            <span>Social Impact </span>
            <span>Careers</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Partnerships </span>
            <span>Creator Network</span>
            <span>Affiliates</span>
            <span>Invite a Friend</span>
            <span>Press & News</span>
            <span>Investor Relations</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>SkillBay</h2>
            <span> &copy; SkillBay International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="img/twitter.png" alt="" />
              <img src="img/facebook.png" alt="" />
              <img src="img/linkedin.png" alt="" />
              <img src="img/pinterest.png" alt="" />
              <img src="img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <div className="link">
              <img src="img/accessibility.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
