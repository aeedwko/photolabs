import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, selectTopic }) => {
  console.log(selectTopic);
  const parsedSampleData = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        topic={topic}
        selectTopic={selectTopic}
      />
    );
  });

  return (
    <div className="top-nav-bar__topic-list">
      {parsedSampleData}
    </div>
  );
};

export default TopicList;
