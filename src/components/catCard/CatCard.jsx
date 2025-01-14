import React from "react";
import "./catCard.scss";
import { Link } from "react-router-dom";


export default function CatCard({ item }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
