import React from "react";

const Card = ({ content }) => {
  const { id, name, age, image } = content;
  return (
    <div className="card">
      <div className="profile-image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h1>{name}</h1>
        <p>{age} years </p>
      </div>
    </div>
  );
};

export default Card;
