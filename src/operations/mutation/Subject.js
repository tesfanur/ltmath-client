import { gql } from "apollo-boost";

export const ADD_SUBJECT = gql`
  mutation addSubject($subjectName: String) {
    addSubject(subjectName: $subjectName) {
      subjectName
    }
  }
`;
export const UPDATE_SUBJECT_BY_ID = gql`
  mutation findSubjectByIdAndUpdate(
    $subjectId: ID
    $subjectUpdateOption: SubjectInput
  ) {
    findSubjectByIdAndUpdate(
      subjectId: $subjectId
      subjectUpdateOption: $subjectUpdateOption
    ) {
      _id
      subjectName
    }
  }
`;
export const DELETE_SUBJECT_BY_ID = gql`
  mutation deleteSubject($subjectId: ID) {
    deleteSubject(subjectId: $subjectId) {
      _id
      subjectName
    }
  }
`;
