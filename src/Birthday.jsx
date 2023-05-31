import React from "react";
import Card from "./Card";

const Birthday = ({ birthday }) => {
  console.log(birthday);
  return (
    <div>
      <h1 className="title">{birthday.length} Birthday Today</h1>
      {birthday.map((content) => (
        <Card content={content} key={content.id} />
      ))}
    </div>
  );
};

export default Birthday;
