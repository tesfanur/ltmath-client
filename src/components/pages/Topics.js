import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_TOPICS } from "../../operations/query/Topics";

function Topics() {
  const { loading, error, data } = useQuery(GET_ALL_TOPICS);
  // let { getAllTopics } = data.data;
  console.log("data", data);
  if (loading) return <p>Loading ...</p>;
  if (error) return <h1>You are not allowed to view Topics</h1>;
  let topics = [];
  if (data.getAllTopics.length === 1) topics = data.getAllTopics[0].topics;
  return (
    <div>
      <ul className="container">
        {topics.map(({ topic, _id }) => {
          return <li key={_id}>{topic}</li>;
        })}
      </ul>
    </div>
  );
}
export default Topics;
