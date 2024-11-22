import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  // Layout: Header, footer
  return (
    <div className="youtube-list">
      {/* children component */}
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index == 1) newClass = "abc";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
