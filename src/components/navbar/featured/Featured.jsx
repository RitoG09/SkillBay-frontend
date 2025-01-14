import React from "react";
import "./Featured.scss";
export default function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Your Go-To Hub for <i>freelance</i> Talent</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder="Build a dynamic Webapp" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular : </span>
            <button>Web Design</button>
            <button>Logo Design</button>
            <button>AI Services</button>
            <button>Wordpress</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}
