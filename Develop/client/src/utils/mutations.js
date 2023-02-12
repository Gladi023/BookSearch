import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]
    $description: String
    $title: String
    $bookId: String
    $image: String
    $link: String
    $title: String
  ) {
    saveBook(
      authors: $authors
      description: $description
      title: $title
      bookId: $bookId
      image: $image
      link: $link
      title: $title
    ) {
      user {
        _id
        username
        bookCount
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookIdToRemove: String!) {
    removeBook(bookIdToRemove: $bookIdToRemove) {
      user {
        _id
        username
        bookCount
        savedBooks {
          _id
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;