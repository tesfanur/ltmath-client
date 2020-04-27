import React from "react";
// import { useParams } from "react-router-dom";
import { Message, Container, Divider, List, Icon } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

// import { CustomStyledButton as SubmitButton } from "../styledcomponents/Button";
import { GET_ALL_SUBJECTS } from "../../operations/query/Subject";

function SUBJECTS() {
  // const { userId } = useParams();
  const { loading, error, data } = useQuery(GET_ALL_SUBJECTS);
  console.log({ data });
  if (loading) return <p>Loading ...</p>;
  if (error)
    return (
      <Container style={{ marginTop: "10px", width: "50%" }}>
        <Message
          error
          header="There's something wrong in fetching your request"
          content={error.message}
        />
      </Container>
    );

  return (
    <Container style={{ width: "40%" }}>
      <List>
        {data.getAllSubjects.map(({ subjectName, _id }) => {
          return (
            <>
              <List.Item
                key={_id + `list`}
                href={`/subjects/${_id}`}
                className="flex-list-item"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100vw",
                  }}
                >
                  <div className="flex-item" key={_id + `subject`}>
                    {subjectName}
                  </div>
                  <div className="flex-item" key={_id + `edit-icon`}>
                    <Icon name="edit" />
                  </div>
                  <div className="flex-item" key={_id + `trash-icon`}>
                    <Icon name="trash" />
                  </div>
                </div>
              </List.Item>
              <Divider />
            </>
          );
        })}
      </List>
      {/* <Button icon="add circle" /> */}

      {/* <Form
        onSubmit={(event) => handleSubmit(event, signin)}
        className={loading ? "loading" : ""}
        fluid
      >
        <Form.Input
          label="Subject"
          icon="teal book"
          iconPosition="left"
          placeholder="Add Subject"
          name="subject"
          fluid
          error={errors.username ? true : false}
          value={subject}
          onChange={handleChange}
          // required
        />

        <SubmitButton type="submit" className="fluid">
          Login
        </SubmitButton>
      </Form> */}
    </Container>
  );
}

export default SUBJECTS;
