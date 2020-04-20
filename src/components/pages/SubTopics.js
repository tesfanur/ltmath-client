import React, { useState } from "react";
import {
  List,
  Select,
  Dropdown,
  Card,
  Icon,
  Message,
  Container,
} from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_SUB_TOPICS } from "../../operations/query/Topics";

function SubTopics() {
  const [topicId, setTopicId] = useState("");
  const { loading, error, data } = useQuery(GET_ALL_SUB_TOPICS, {
    variables: { topicId: "5e984b1dedced960b8e2ce62" },
  });
  console.log("data", data, topicId, setTopicId);
  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <Message
        error
        header="There's something wrong in fetching your request"
        content={error.message}
      />
    );
  let topic,
    subTopics = [];
  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" },
  ];

  const friendOptions = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
      image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
      image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
      image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
    },
  ];
  if (data.getAllSubTopics.length === 1) {
    topic = data.getAllSubTopics[0].topic;
    subTopics = data.getAllSubTopics[0].subTopics;
  }
  return (
    <Container>
      {/* <ul className="container"> */}
      <List>
        {subTopics.map(({ subTopic, _id }) => {
          return <List.Item key={_id}>{subTopic}</List.Item>;
        })}
        {/* </ul> */}
      </List>
      <Select placeholder="Select your country" options={countryOptions} />
      <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      />
      <Card
        image="/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      />
    </Container>
  );
}
export default SubTopics;
