import React from "react";
const TopicList = ({ topics }) => {
  console.log({ topics });
  return (
    <div>
      <ul>
        {topics.map((topic) => {
          const { topic: topicName, _id, subTopics } = topic;
          console.log({ topic, _id, subTopics });
          return <li key={_id}>{topicName}</li>;
        })}
      </ul>
    </div>
  );
};

export default TopicList;
