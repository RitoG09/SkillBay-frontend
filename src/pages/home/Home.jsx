import React from "react";
import "./Home.scss";
import Featured from "../../components/navbar/featured/Featured";
import TrustedBy from "../../components/navbar/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              <i>Empowering Your Vision with Top Talent</i>
            </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Over 700 categories
            </div>
            <p>
              Get results from skilled freelancers from all over the world, for
              every task, at any price point.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Clear, transparent pricing
            </div>
            <p>
              Pay per project or by the hour (Pro). Payments only get released
              when you approve.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done faster
            </div>
            <p>
              Filter to find the right freelancers quickly and get great work
              delivered in no time, every time.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 award-winning support
            </div>
            <p>
              Chat with our team to get your questions answered or resolve any
              issues with your orders.
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9"
              controls
            />
          </div>
        </div>
      </div>
      <div className="features light">
        <div className="container">
          <div className="item">
            <h1>SkillBay Bussiness.....</h1>
            <h1>A bussiness solutoin desinged for teams</h1>
            <p>
              Upgrade to curated experience packed wit tools and benefits,
              dedicated to business
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven bussiness experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one popwerful
              workspace
            </div>
            <button>Explore SkillBay Bussiness</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
