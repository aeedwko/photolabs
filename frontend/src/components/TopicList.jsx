import React from "react";

import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, selectTopic }) => {

  const topicListItems = topics.map((topic) => {
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
      {topicListItems}
    </div>
  );
};

export default TopicList;
