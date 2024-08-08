import React from "react";
import Card from "./Card";

const List = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
