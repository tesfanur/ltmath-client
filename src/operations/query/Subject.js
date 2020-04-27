import { gql } from "apollo-boost";

export const GET_ALL_SUBJECTS = gql`
  query getAllSubjects {
    getAllSubjects {
      _id
      subjectName
    }
  }
`;

export const GET_SUBJECT_BY_ID = gql`
  query getSubjectById($subjectId: ID!) {
    getSubjectById(subjectId: $subjectId) {
      _id
      subjectName
    }
  }
`;
