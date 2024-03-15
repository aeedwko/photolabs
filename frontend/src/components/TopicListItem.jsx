import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, selectTopic }) => {
  
  const handleClick = () => {
    selectTopic(topic.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>
        {topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;
